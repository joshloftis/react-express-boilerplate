import express from 'express';
import routes from './routes/index';

const app = express();

app.use(express.static('dist/public'));

app.use('/', routes);

export default app;
