//Creando el modelo como se hace en mongoose 

'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; // nos permitira definir nuevos esquemas con el objeto esquemas 
var UserSchema = Schema({
	name: String, 
	surname: String, 
	nick: String, 
	email: String, 
	password: String, 
	role: String, 
	image: String
});// structura que van a tener todos los objetos  

//pluralizar el nombre del modelo UserSchema de la entidad User se guardara como users
module.exports = mongoose.model('User', UserSchema);