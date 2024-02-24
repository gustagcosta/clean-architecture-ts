import express, { type Request, type Response } from 'express';
import router from './routes';

export default function run() {
  const app = express();
  app.use(express.json());
  app.use(router);

  app.use((err: any, req: Request, res: Response) => {
    console.error({ err });
    res.status(res.statusCode).json({
      message: err instanceof Error ? err.message : 'internal server error',
    });
  });

  app.listen(3333, () => {
    console.log('Server up!');
  });
}
