import { Router } from 'express';
import { StarSystemController } from '../controllers/starSystemController';
import { StarSystemRepository } from '../repositories/StarSystemRepository';
import { StarSystemService } from '../services/StarsystemService';
import { StarSystemValidator } from '../utils/Validations';

const router = Router();

const repository = new StarSystemRepository();
const starValidator = new StarSystemValidator();
const starService = new StarSystemService(repository, starValidator);
const starController = new StarSystemController(starService);

router.get('/', starController.index.bind(starController));
router.get('/:name', starController.show.bind(starController));
router.post('/', starController.post.bind(starController));
router.put('/:name', starController.update.bind(starController));
router.delete('/:name', starController.delete.bind(starController));

export default router;
