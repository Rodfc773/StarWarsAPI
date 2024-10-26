import { Router } from 'express';

import { PlanetController } from '../controllers/planetController';

const planetController = new PlanetController();

const planetRouter = Router();

planetRouter.get('/', planetController.index.bind(planetController));
planetRouter.post('/', planetController.post.bind(planetController));

export default planetRouter;
