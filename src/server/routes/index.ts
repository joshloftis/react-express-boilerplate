import { Response, Request, Router } from 'express';

const router: Router = Router();

router.get('/api/test', (req: Request, res: Response) => {
  res.send({ test: 'This is a test!' });
});

export default router;
