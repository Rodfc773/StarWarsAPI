import { Router, Request, Response } from 'express';

const planetRouter = Router();

planetRouter.get('/', (req: Request, res: Response) => {
  res.send('olá');
});

export default planetRouter;
