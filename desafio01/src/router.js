import { Router } from 'express';

import ProjectController from './app/controllers/ProjectController';
import TaskController from './app/controllers/TaskController';
import countMiddleware from './app/middlewares/Count';
import paramIdMiddleware from './app/middlewares/ParamId';

const routes = new Router();

routes.use(countMiddleware);
routes.post('/projects', ProjectController.store);
routes.get('/projects', ProjectController.index);

routes.put('/projects/:id', paramIdMiddleware, ProjectController.update);
routes.delete('/projects/:id', paramIdMiddleware, ProjectController.delete);

routes.post('/projects/:id/tasks', paramIdMiddleware, TaskController.store);

export default routes;
