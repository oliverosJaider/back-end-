
const express = require ('express');
const routesPosts = express.Router();
const controllerArea = require('../controller/index.controller.area');
const deproduct = require('../db/index.db')

routesPosts.post('/registrarArea', controllerArea.RegistrarArea);
routesPosts.delete('/eliminarArea/:idArea', controllerArea.eliminarAreaController);
routesPosts.put('/actualizarArea/:idArea', controllerArea.editarArea);

module.exports = routesPosts;