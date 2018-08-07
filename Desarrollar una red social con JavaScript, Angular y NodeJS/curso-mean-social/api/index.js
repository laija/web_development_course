'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;
// se necesita una promesa para conectarse a mongo 
mongoose.Promise  = global.Promise;

// Conexion Database
mongoose.connect('mongodb://localhost:27017/curso_mean_social', { useNewUrlParser: true }) // usa el cliente useMongoClient para la conection 
	.then(() => {
		console.log("--La conexion a la base de datos curso_mean_social se a realizado correctamente");

		//crear servidor 
		app.listen(port, () => {
			console.log('servidor corriendo correctamente en la url: localhost: 3700');
		});

	})
	.catch(err => console.log(err));
