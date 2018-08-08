'use strict' // ayuda a tener las funciones de flecha 

var bcrypt = require('bcrypt-nodejs'); // para cifrar las contrasennas

// para indicar que es un modelo la primera letra de la variable se ponen en mayuscula 
var User = require('../models/user');
 

function home(req, res) {
	res.status(200).send({
		message: 'hola mundo home'
	});
};

function pruebas(req, res) {
	res.status(200).send({
		message : "Hola mundo pruebas"
	});
};

function saveUser(req, res){
	var user = new User(); // crear un objeto del modelo de usuario 
	var params = req.body; // todo los request que lleguen por post, los vamos a recoger y guardar en esa variable 

	if(params.name && params.surname && params.nick && params.password){
		user.name = params.name;
		user.surname = params.surname;
		user.nick = params.nick;
		user.email = params.email;
		user.role = 'ROLE_USER';
		user.image = null;

		bcrypt.hash(params.password, null, null, (err, hash) =>{
			user.password = hash;
			user.save((err, userStored) =>{
				if(err) return res.status(500).send({message: 'Error al guardar el usuario'});
				if(userStored){
					res.status(200).send({user: userStored});
				}else{
					res.status(400).send({message: 'No se ha registrado el usuario'})
				}
			});

		});
	}else {
		res.status(200).send({
			message: 'Envia todos los campos necesarios'
		});
	}

}

// se exportan en formato de objeto para luego poder hacer uso de ellas 
module.exports = {
	home,
	pruebas,
	saveUser
}