/*toda la configuarcion del servidor http */

'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();	 // esto ya nos carga el framework

// cargar rutas 
var user_routes = require('./routes/user');
var follow_router = require('./routes/follow');
var publications_routes = require('./routes/publication');
var message_routes =  require('./routes/message');
// requerimentos que body parcer 

// middleware - metodo que se ejecutan antes de que llegue a un controlador y se ejecuta con cada peticion 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());	// convert to json 


// configurar cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
 
    next();
});


// rutas 
app.use('/api', user_routes); //permite acer middleware, en cada peticion el middleware siempre se va a ejecutar antes que la accion del controlador
app.use('/api', follow_router);
app.use('/api', publications_routes);
app.use('/api', message_routes);
// exportar - porque cada fichero que se cree va a ser entendido como un module que vapor a poder importar en el fichero que queremos de nuestro proyecto 
module.exports = app;