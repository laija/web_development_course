'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

ar MessageSchema = Schema({
	text: String, 
	created_at: String, 
	emitter: {type: Schema.ObjectId, ref: 'User'},
	receiver: {type: Schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.mocel('Message',MessageSchema);