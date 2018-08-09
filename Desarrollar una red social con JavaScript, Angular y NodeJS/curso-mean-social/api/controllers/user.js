'use strict' // ayuda a tener las funciones de flecha 

var bcrypt = require('bcrypt-nodejs'); // para cifrar las contrasennas
var jwt = require('../services/jwt');
// para indicar que es un modelo la primera letra de la variable se ponen en mayuscula 
var User = require('../models/user');
 
// Metodos de prueba 
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

// registro 
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

		// Controlar usuarios duplicados by cheking email and nick 
		User.find({ $or: [{email: user.email.toLowerCase()}, {nick: user.nick.toLowerCase()}
			]}).exec((err, users) => {
				if(err) return res.status(500).send({message: 'Error en la peticion de usuarios'});

				if(users && users.length >= 1){
					return res.status(200).send({message: 'El usuario que intentas registrar ya existe'})
				}
				else{
					// Cifra la contrasenna y guarda los datos
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
				}
			});
	}else {
		res.status(200).send({
			message: 'Envia todos los campos necesarios'
		});
	}

}

// Login
function loginUser(req, res){
	var params =  req.body;
	var email = params.email;
	var password = params.password;

	// haciendo un and
	User.findOne({email: email}, (err, user) => {
		if(err) return res.status(500).send({message: 'Error en la peticion'});

		if(user){
			bcrypt.compare(password, user.password, (err, check) =>{
				if(check){
					// Devolver datos de susuario 
					if(params.gettoken){
						// Generar y Devolver token

						return res.status(200).send({
							token: jwt.createToken(user)
						});
					}else{
						user.password = undefined;
						return res.status(200).send({user});
					}
				}else{
					return res.status(404).send({message: 'El usuario no se a podido identificar'});
				}
			});
		}
		else{
			return res.status(404).send({message: 'El usuairo no se a podido identificar!!!'});
		}
	});

}

// datos de un usuario 

function getUser(req, res){
	// cuando llegan datos por la url utilizamos params, cuando llegan datos por post or put utilizamos body
	var userId = req.params.id;
	User.findById(userId, (err, user) => {
		if(err) res.status(500).send({message: 'Error en la peticion'});

		if(!user) return res.status(404).send({message: 'El usuario no existe'});

		return res.status(200).send({user});
	})
}

// se exportan en formato de objeto para luego poder hacer uso de ellas 
module.exports = {
	home,
	pruebas,
	saveUser,
	loginUser,
	getUser
} 