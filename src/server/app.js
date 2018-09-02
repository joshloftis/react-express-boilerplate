import express from 'express';
import path from 'path';
import routes from './routes/index';

const app = express();

app.use(express.static('build/public'));
app.use('/', routes);

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
} else {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build/public/index.html'));
  });
}

export default app;
