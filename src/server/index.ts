import { createServer } from 'http';
import app from './app';

const server = createServer(app);

const PORT = process.env.PORT || 4000;

app.set('port', PORT);
server.listen(app.get('port'), () => {
  console.log('Express running → PORT', app.get('port'));
});
