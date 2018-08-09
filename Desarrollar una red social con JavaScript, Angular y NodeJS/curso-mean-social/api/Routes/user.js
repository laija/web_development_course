'use strict'
// tiene dentro la configuracion de rutas del controlador de usuarios
var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router(); // para terner acceso a los metodos get, post etc
var md_auth = require('../middlewares/authenticated');

api.get('/home', UserController.home);

api.get('/pruebas', md_auth.ensureAuth, UserController.pruebas);

api.post('/register', UserController.saveUser);

api.post('/login', UserController.loginUser);

api.get('/user/:id', md_auth.ensureAuth, UserController.getUser);

module.exports = api;