/*toda la configuarcion del servidor http */

'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();	 // esto ya nos carga el framework

// cargar rutas 
// requerimentos que body parcer 

// middleware - metodo que se ejecutan antes de que llegue a un controlador y se ejecuta con cada peticion 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());	// convert to json 

//cors

// rutas 
app.get('/', (req, res) =>{
	res.status(200).send({
		message: 'hola mundo'
	});
});

// exportar - porque cada fichero que se cree va a ser entendido como un module que vapor a poder importar en el fichero que queremos de nuestro proyecto 
module.export = app;