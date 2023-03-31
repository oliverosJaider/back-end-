
const express = require('express');
const routesPosts = express.Router();
const controllerProduct = require ('../controller/index.controller')
const deproduct = require ('../db/index.db')
//metodo post, delete, put, para registrar, eliminar y editar los productos
routesPosts.post('/registrarUsuario', controllerProduct.registroController);
routesPosts.delete('/eliminarRegistro/:idUser', controllerProduct.eliminarController);
routesPosts.put('/actualizar/:idUser', controllerProduct.editarController);

//routesPosts.get('/obtener'), controllerProduct.

module.exports = routesPosts;