import { Router } from 'express';
import * as User from './controller';
// import { paramValidation } from '../../shared/middlewares/paramValidation';
import { asyncHandler } from '../../utils/asyncHandler';
import { validateUserInput } from './middleware/userInputValidation';
import { tokenValidation } from './middleware/tokenValidation';
import { tokenValidationCookie } from './middleware/tokenValidationCookie';

const router = Router();

// router.get('/users/:id', paramValidation, User.getUserById);
// router.post('/users', asyncHandler(User.createUser));
// router.delete('/users/:id', paramValidation, User.deleteUser);
// router.put('/users/:id', paramValidation, User.updateUser);

router.get('/users', tokenValidationCookie, asyncHandler(User.getAllUsers));

router.post('/signup', validateUserInput, asyncHandler(User.createUser));
router.post('/login', validateUserInput, asyncHandler(User.loginUser));
// router.get('/verify', tokenValidationURL, asyncHandler(User.verifyUser));

export default router;
