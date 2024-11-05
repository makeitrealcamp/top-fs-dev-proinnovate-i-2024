import { Router } from 'express';
import { getAllProjects, getProjectById } from './controller';
import { asyncHandler } from '../../utils/asyncHandler';
import { paramValidation } from '../../shared/middlewares/paramValidation';

const router = Router();

router.get('/projects', asyncHandler(getAllProjects));

router.get('/projects/:id', paramValidation, asyncHandler(getProjectById));

export default router;
