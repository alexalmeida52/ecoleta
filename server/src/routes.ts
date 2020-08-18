import express from 'express';

const routes = express.Router();

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const pointsController = new PointsController();
const itemsController = new ItemsController();

/**
 * ROTAS DOS POINTS
 * 
 */

// Criar Point
routes.post('/points', pointsController.create);

// Listar Points
routes.get('/points', pointsController.index);

// Listar Point
routes.get('/points/:id', pointsController.show);


/**
 * ROTAS DOS ITEMS
 */

// Listar Items
routes.get('/items', itemsController.index);

// Listar Item
routes.get('/items/:id', itemsController.index);


export default routes;