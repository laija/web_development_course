'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PublicationSchema = Schema({
	text: String,
	file: String,
	created_at: String, 
	user: { type: Schema.ObjectId, ref: 'User'}
});
// el tipo de dato v a ser un object id haciendo referencia al modelo user, object id porque vamos a guardar el object id de otro documento haciendo referencia a la entidad user 

module.exports  = mongoose.model('Publication',PublicationSchema);