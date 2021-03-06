'use Strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar archivo de rutas
var project_routes = require('./rutes/project');

// middlewares
app.use(bodyParser.urlencoded({extende:false})); //metodo de express usar body parse para convertir por http en un objeto Json 
app.use(bodyParser.json());// todolo que llegue que se convierta a Json 

// CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // aqui se annaden los origenes permitidos 
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Rutas

app.use('/api', project_routes);

/*
app.post('/inicio/:id'    ,(req, res) =>{
	console.log(req.body.nombre);
	console.log(req.query.web);	
	console.log(req.params.id);	
	res.status(200).send({
		message: "<h1>Pagina de inicio</h1>"
	});
});

app.get('/test',(req, res) =>{
	res.status(200).send({
		message : "Hola mundo desde mi API"
	});

});
*/


// exportar  
module.exports = app;


