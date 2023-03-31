const express = require('express');
const routes = express.Router();
const services = require('../services/index.services');
const handerls = require('../handlers/index.handlers');
const userHandlers = handerls('users');


module.exports = routes;