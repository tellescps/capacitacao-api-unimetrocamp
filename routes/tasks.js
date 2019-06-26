
const express = require('express');

const tasksController = require('../controllers/tasks.controller')

const routes = express.Router();

routes.get('/', tasksController.get);
routes.post('/', tasksController.create);
routes.post('/', tasksController.update);
routes.post('/', tasksController.remove);

module.exports = routes;