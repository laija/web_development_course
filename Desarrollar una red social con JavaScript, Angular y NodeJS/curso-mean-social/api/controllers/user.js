'use strict' // ayuda a tener las funciones de flecha 

var bcrypt = require('bcrypt-nodejs'); // para cifrar las contrasennas
var mongoosePaginate =  require('mongoose-pagination')
var fs = require('fs'); // libreria filesystem de node y que permite trabajar con archivos 
var path = require('path');
// permite trabajar con rutas del sistema de ficheros 

var jwt = require('../services/jwt');
// para indicar que es un modelo la primera letra de la variable se ponen en mayuscula 
var User = require('../models/user');
var Publication = require('../models/publication');

var Follow = require('../models/follow');
 
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
					if(params.gettoken == "true"){
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

// Conseguir datos de un usuario 

function getUser(req, res){
	// cuando llegan datos por la url utilizamos params, cuando llegan datos por post or put utilizamos body
	var userId = req.params.id;
	User.findById(userId, (err, user) => {
		if(err) return res.status(500).send({message: 'Error en la peticion'});

		if(!user) return res.status(404).send({message: 'El usuario no existe'});

		// req.user.sub es el user del usuario identificado  
		followThisUser(req.user.sub, userId).then((value) => {
			user.password = undefined;
			return res.status(200).send({
				user,
				following: value.following,
				followed: value.followed,
			});
		});
		/*
		Follow.findOne({"user": req.user.sub, "followed" : userId}).exec((err, follow) => {
			if(err) return status(500).send({message: 'Error al comprobar el seguimiento'});
			return res.status(200).send({user, follow});
		});
		*/
	});
}

async function followThisUser( identity_user_id, user_id ) {

	var following = await Follow.findOne({"user": identity_user_id, "followed" : user_id });
	
	// para ver si ese usuario nos sigue a nosotros 
	var followed  = await Follow.findOne({"user": user_id , "followed" : identity_user_id});
	
	return{
		following,
		followed
	}
}

// Devolver un listado de usuarios paginado  

function  getUsers(req, res){
	var identity_user_id = req.user.sub;

	var page =1;
	if(req.params.page){
		page  = req.params.page;
	}

	var itemsPerPage = 5;

	User.find().sort('_id').paginate(page,itemsPerPage, (err, users, total) => {
		if(err) res.status(500).send({message: 'Error en la peticion'});

		if(!users) return res.status(404).sed({message: 'No hay usuarios disponibles'});

		followUserIds(identity_user_id).then((value)=>{

			return  res.status(200).send({
				usuarios: users, 
				user_following: value.following,
				user_follow_me: value.followed,
				total,
				pages: Math.ceil(total/itemsPerPage)
			});
		});
	});
}


async function followUserIds(user_id){
	var following = await Follow.find({"user":user_id}).select({'_id': 0, '__v':0, 'user':0});
 
	var follows_clean = [];
	following.forEach((follow) => {
		follows_clean.push(follow.followed);
	});
	//console.log(follows_clean);

	var followed = await Follow.find({"followed":user_id}).select({'_id': 0, '__v':0, 'followed':0});
	var followed_clean = [];
	followed.forEach((follow) => {
		followed_clean.push(follow.user);
	});
	//console.log(followed_clean);

	return {
		following: follows_clean,
		followed: followed_clean
	}
}

function getCounters(req, res){
	
	var userId= req.user.sub;
	if(req.params.id){
		userId = req.params.id;
	}
	getCountFollow(userId).then((value) => {
		return res.status(200).send(value);
	});	
}

async function getCountFollow(user_id){
	var following = await Follow.count({"user":user_id})
	var followed = await  Follow.count({"followed": user_id});

	var publications = await Publication.count({"user": user_id})

	return{
		following,
		followed,
		publications
	}
}

// Edicion de datos de usuario 

function updateUser(req, res){
	var userId =  req.params.id;
	var update = req.body;

	// elimar propiedad password por seguridad ya que se recomienda que tenga se propio metodo 
	delete update.password

	// si user id es diferente al rea.user.sub
	if(userId != req.user.sub){
		return res.status(500).send({message: 'No tienes permiso para actualizar los datos del usuario'});
	}

//	console.log(update);
	User.find({ $or: [
		{email: update.email.toLowerCase()}, 
		{nick: update.nick.toLowerCase()}
	]}).exec((err, user)=>{
		var user_isset = false;
		user.forEach((update) =>{
			if(update && update._id != userId) user_isset = true;
		});
		
		if(user_isset) return res.status(404).send({message: 'Data is in use already'});
		
		// se utra true pare regresar objeto actualizado 
		
		User.findByIdAndUpdate(userId, update, {new: true}, (err, userUpdated) =>{
			if(err) return res.status(500).send({message: 'Error en la peticion'});

			if(!userUpdated) return res.status(404),sebd({message:'No se aha podido actualizar el usuario'});

			return res.status(200).send({update: userUpdated});
		});
	});

}

// subir archivos de imagen/avatar de usuario 
function uploadImage(req, res){
	var userId =  req.params.id;
	var update = req.body;
	if(req.files){
		var file_path = req.files.image.path; // ruta del archivo 
		var file_split = file_path.split('\\'); // nombr del archivo 
		var file_name=file_split[2];
		var ext_split = file_name.split('\.');
		var file_ext = ext_split[1];

		// si user id es diferente al rea.user.sub
		if(userId != req.user.sub){
			return removeFilesofUpload(res, file_path, 'You dont have permissions to upadte this user');
		}

		if(file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'gif'){
			//actualizar documento de usuario logueado 
			User.findByIdAndUpdate(userId, {image: file_name}, {new:true}, (err, userUpdated) =>{
				if(err) return res.status(500).send({message: 'Error en la peticion'});

				if(!userUpdated) return res.status(404),sebd({message:'No se aha podido actualizar el usuario'});

				return res.status(200).send({user: userUpdated});
			});
		}else{
			return removeFilesofUpload(res, file_path, 'Invalid extention');
		}
	}else{
		return res.status(200).send({message: 'File was not uploaded'})
	}
}

function removeFilesofUpload(res, file_path, message){
	fs.unlink(file_path, (err) =>{
		return res.status(200).send({message: message});
	}); 	
}

function getImageFile(req, res){
	var image_file = req.params.imageFile; //Parametro que se recoge por la url, ese nombre de ficheco que se pase por la url, va a ser el que va a recibir el metodo, y va a sacar esa imagen del sistema de ficheros y nos la va a regresar 

	var path_file = './upload/users/'+image_file;
	fs.exists(path_file, (exists) =>{
		if(exists){
			res.sendFile(path.resolve(path_file)); // esucpe el fichero en crudo 
		}else{
			return res.status(200).send({message: 'No existe la imagen...'})
		}
	});
}




// se exportan en formato de objeto para luego poder hacer uso de ellas 
module.exports = {
	home,
	pruebas,
	saveUser,
	loginUser,
	getUser,
	getUsers,
	updateUser,
	uploadImage,
	getImageFile,
	followThisUser,
	followUserIds,
	getCounters
} 