import { CharacterDataValidator } from '../utils/Validations';
import { CharRepository } from '../repositories/CharRepository';
import { CharService } from '../services/CharService';
import { CharactersController } from '../controllers/charactersControllers';
import { Router } from 'express';

const repository = new CharRepository();
const validator = new CharacterDataValidator();
const service = new CharService(repository, validator);
const charController = new CharactersController(service);

const router = Router();

router.get('/', charController.index.bind(charController));
router.get('/:id', charController.show.bind(charController));
router.post('/', charController.post.bind(charController));
router.put('/:id', charController.update.bind(charController));
router.delete('/:id', charController.delete.bind(charController));

export default router;
