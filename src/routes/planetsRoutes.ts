import { Router } from 'express';

import { PlanetController } from '../controllers/planetController';
import { PlanetRepository } from 'src/repositories/PlanetRepository';
import { PlanetDataValidator } from 'src/utils/Validations';
import { PlanetService } from 'src/services/PlanetService';

const repository = new PlanetRepository();
const validador = new PlanetDataValidator();

const service = new PlanetService(repository, validador);

const planetController = new PlanetController(service);

const planetRouter = Router();

planetRouter.get('/', planetController.index.bind(planetController));
planetRouter.get('/:name', planetController.show.bind(planetController));

planetRouter.post('/', planetController.post.bind(planetController));

planetRouter.delete('/:name', planetController.delete.bind(planetController));

planetRouter.patch('/:name', planetController.put.bind(planetController));

export default planetRouter;
