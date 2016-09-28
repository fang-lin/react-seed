import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import uiRoutes from './Routes';

export default (req, res, next) => {
    
    match({routes: uiRoutes, location: req.url}, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            // console.log(renderProps)
            res.status(200).render('index', {
                title: 'react seed homepage',
                config: {
                    'vendor.js': '/assets/js/vendor-dev.js',
                    'main.js': '/assets/js/main-dev.js'
                },
                body: renderToString(<RouterContext {...renderProps} />)
            });
        } else {
            res.status(404).send('Not found')
        }
    })
}