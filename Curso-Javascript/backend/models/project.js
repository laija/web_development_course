//Un modelos representa un documento de la coleccion de la base de datos 

'use-strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
 // molde que se va a utilizar para crear nuevos esquemas en la base de datos 
var Projectschema = Schema({
	name: String,
	description: String,
	category: String,
	year: Number,
	langs: String,
	image: String
});

// para poder exportr este module y poder importar en otro fichero 
module.exports = mongoose.model('Project', Projectschema);
// (tipo de entidad que se guardara en la base de datos, esquema)
