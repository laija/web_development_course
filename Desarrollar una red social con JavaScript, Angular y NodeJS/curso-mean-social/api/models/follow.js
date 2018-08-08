'use strict'

var mongoose =  require('mongoose');
var Schema =  mongoose.Schema;
var FollowSchema = Schema({
	user: { type: Schema.ObjectId, ref: 'User' },
	folowed: { type: Schema.ObjectId, ref: 'User' },
});

module.export = mongoose.model('Follow', FollowSchema);