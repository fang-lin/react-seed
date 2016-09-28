import express from 'express';
import path from 'path';
import uiRouter from './ui/router';
import apiRouter from './api/router';

const app = express();

app.set('views', 'src/ui');
app.set('view engine', 'ejs');
app.use('/assets', express.static(path.join(__dirname, '../public')));
app.use('/api', apiRouter);
app.use('/', uiRouter);

const post = 3031;
const host = '0.0.0.0';

app.listen(post, host, () => {
    console.log(`[SERVER STARTED] site server listening on http://${host}:${post}`);
});