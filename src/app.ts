import * as express from 'express';
import { Application } from 'express';
import * as cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';

import planetRouter from './routes/planetsRoutes';
import starSystemRouter from './routes/starSystemRoutes';

import 'dotenv/config';

export class App {
  private _app: Application;
  private _port: string;

  constructor() {
    this._app = express();
    this._port = process.env.APP_PORT;
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this._app.use(express.urlencoded({ extended: true }));
    this._app.use(express.json());
    this._app.use(helmet());
    this._app.use(cors());
  }

  private routes() {
    this._app.use('/planets', planetRouter);
    this._app.use('/starsystem', starSystemRouter);
  }
  run() {
    this._app.listen(this.port, () => {
      console.log(
        `A API está rodando no endereço: http://localhost:${this.port}`,
      );
    });
  }

  get port(): string {
    return this._port;
  }
  get app(): Application {
    return this._app;
  }
}
