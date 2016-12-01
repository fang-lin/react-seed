'use strict';

const gulp = require('gulp');
const util = require('gulp-util');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const exec = require('child_process').exec;
const webpack = require('webpack-stream');
const browserSync = require('browser-sync').create();


const server = {
    childProcess: null,
    browserSyncServer: null,
    start: (done) => {
        server.childProcess = exec('node src/entry');

        server.childProcess.stdout.on('data', stdout => {
            util.log(stdout);
            if (stdout.indexOf('[SERVER STARTED]') > -1) {
                done && done();
            }
        });

        server.childProcess.stderr.on('data', stderr => {
            util.log(stderr);
        });

        util.log('gulp:server:start');

        server.browserSyncServer = server.browserSyncServer || browserSync.init({
                proxy: {
                    target: '0.0.0.0:3031',
                    ws: true
                }
            });
    },
    stop: () => {
        server.childProcess.kill();
        util.log('gulp:server:stop');
    },
    restart: (done) => {
        server.stop();
        server.start(done);
    }
};

gulp.task('serve', server.start);

gulp.task('watch:webpack', () => {
    return gulp.watch('src/ui/**/*.js', ['webpack:dev']);
});

gulp.task('watch:serve', (done) => {
    return gulp.watch('src/**/*.js', () => {
        server.restart();
    });
});

gulp.task('sass:dev', (done) => {
    return gulp.src('src/ui/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: [require('bourbon').includePaths]
        }).on('error', sass.logError))
        .pipe(postcss([
            autoprefixer({browsers: ['last 2 versions']})
        ]))
        .pipe(sourcemaps.write())
        .pipe(rename('main-dev.css'))
        .pipe(gulp.dest('public/css'));
});

gulp.task('watch:sass', (done) => {
    return gulp.watch('src/ui/scss/main.scss', ['sass:dev']);
});

gulp.task('watch:css', (done) => {
    return gulp.watch('public/css/*.css', () => {
        browserSync.reload({stream: true});
    });
});

gulp.task('watch:js', (done) => {
    return gulp.watch('public/js/*.js', () => {
        browserSync.reload();
    });
});

gulp.task('webpack:dev', (done) => {
    return gulp.src('./src/ui/client.js')
        .pipe(
            webpack({
                entry: {
                    main: './src/ui/client',
                    vendor: ['react', 'react-router', 'lodash', 'classnames']
                },
                module: {
                    loaders: [
                        {
                            test: /\.js?$/,
                            loader: 'babel',
                            query: {
                                presets: ['react', 'es2015', 'stage-0']
                            },
                            exclude: /node_modules/
                        }
                    ]
                },
                resolve: {
                    extensions: ['', '.js', '.json'],
                    modulesDirectories: [
                        './node_modules'
                    ]
                },
                devtool: 'inline-source-map',
                output: {
                    filename: 'main-dev.js'
                },
                plugins: [
                    new webpack.webpack.optimize.CommonsChunkPlugin('vendor', 'vendor-dev.js', Infinity)
                ]
            }).on('error', done)
        )
        .pipe(gulp.dest('./public/js'));
});

gulp.task('webpack:prod', (done) => {
    return gulp.src('./src/ui/client.js')
        .pipe(
            webpack({
                entry: {
                    main: './src/ui/client',
                    vendor: ['react', 'react-router', 'lodash', 'classnames']
                },
                module: {
                    loaders: [
                        {
                            test: /\.js?$/,
                            loader: 'babel',
                            query: {
                                presets: ['react', 'es2015', 'stage-0']
                            },
                            exclude: /node_modules/
                        }
                    ]
                },
                resolve: {
                    extensions: ['', '.js', '.json'],
                    modulesDirectories: [
                        './node_modules'
                    ]
                },
                devtool: 'inline-source-map',
                output: {
                    filename: 'main-dev.js'
                },
                plugins: [
                    new webpack.webpack.optimize.CommonsChunkPlugin('vendor', 'vendor-dev.js', Infinity)
                ]
            }).on('error', done)
        )
        .pipe(gulp.dest('./public/js'));
});

gulp.task('default', ['serve', 'webpack:dev', 'sass:dev', 'watch:webpack', 'watch:sass', 'watch:serve', 'watch:css', 'watch:js']);

