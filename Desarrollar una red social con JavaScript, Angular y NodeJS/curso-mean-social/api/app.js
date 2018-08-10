/*toda la configuarcion del servidor http */

'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();	 // esto ya nos carga el framework

// cargar rutas 
var user_routes = require('./routes/user');
var follow_router = require('./routes/follow');
// requerimentos que body parcer 

// middleware - metodo que se ejecutan antes de que llegue a un controlador y se ejecuta con cada peticion 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());	// convert to json 

//cors

// rutas 
app.use('/api',user_routes); //permite acer middleware, en cada peticion el middleware siempre se va a ejecutar antes que la accion del controlador
app.use('/api',follow_router);

// exportar - porque cada fichero que se cree va a ser entendido como un module que vapor a poder importar en el fichero que queremos de nuestro proyecto 
module.exports = app;