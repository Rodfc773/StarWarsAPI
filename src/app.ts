import * as express from 'express';
import { Application } from 'express';
import * as cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';

import planetRouter from './routes/planetsRoutes';

import 'dotenv/config';

class App {
  private app: Application;
  private _port: string;

  constructor() {
    this.app = express();
    this._port = process.env.APP_PORT;
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(helmet());
    this.app.use(cors());
  }

  private routes() {
    this.app.use('/planets', planetRouter);
  }
  run() {
    this.app.listen(this.port, () => {
      console.log(
        `A API está rodando no endereço: http://localhost:${this.port}`,
      );
    });
  }

  get port(): string {
    return this._port;
  }
}

export default new App();
