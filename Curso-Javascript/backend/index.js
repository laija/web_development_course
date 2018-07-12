'use strict'
var mongoose = require('mongoose'); // ya tengo un objeto en la variable 

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
	.then(()=>{
		console.log('Conecxion exitosa');
	})
	.catch(err => console.log(err));
