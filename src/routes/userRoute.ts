import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { UserRepository } from '../repositories/UserRepository';
import { UserService } from '../services/UserService';
import { UserDataValidator } from '../utils/Validations';

const router = Router();

const repository = new UserRepository();
const userValidator = new UserDataValidator();
const userService = new UserService(repository, userValidator);
const userController = new UserController(userService);

router.get('/', userController.index.bind(userController));
router.get('/:name', userController.show.bind(userController));
router.post('/', userController.post.bind(userController));
router.put('/:name', userController.update.bind(userController));
router.delete('/:name', userController.delete.bind(userController));

export default router;