'use strict'
// tiene dentro la configuracion de rutas del controlador de usuarios
var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router(); // para terner acceso a los metodos get, post etc

api.get('/home', UserController.home);

api.get('/pruebas', UserController.pruebas);

api.post('/register', UserController.saveUser);

module.exports = api;