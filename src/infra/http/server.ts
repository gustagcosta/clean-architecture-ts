import express, { type Request, type Response } from 'express';
import router from './routes';

export default function run() {
  const app = express();
  app.use(express.json());
  app.use(router);

  app.listen(3333, () => {
    console.log('Server up!');
  });
}
