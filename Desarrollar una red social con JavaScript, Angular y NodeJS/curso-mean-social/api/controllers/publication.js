'use strict'

var path = require('path');
var fs = require('fs');
var moment = require('moment');
var mongoosePaginate = require('mongoose-pagination');

var Publication = require('../models/publication');
var User = require('../models/user');
var Follow = require('../models/follow');

function probando(req, res){
	res.status(200).send({
		message: 'Hola desde el Controlador de Publicaciones'
	});
}

function savePublication(req, res){
	var params = req.body;
	
	if(!params.text) return res.status(200).send({message: 'Deves enviar un texto!!'});

	var publication = new Publication();
	publication.text = params.text;
	publication.file = 'null'	;
	publication.user = req.user.sub;
	publication.created_at = moment().unix();

	publication.save((err, publicationStored) => {
		if(err) return res.status(500).send({message: 'Error al guardar la publication'});

		if(!publicationStored) return res.status(404).send({message: 'La publicacion No ha sido guardada'});

		return res.status(200).send({publication: publicationStored});
	});	
}

function getPublications(req, res){
	var publication = new Publication();
	var params = req.body;
	var page = 1;
	if(req.params.page){
		page = req.params.page;
	}
	var itemsPerPage = 4;
	//var following = 

	Follow.find().populate('followed').exec((err, follows) =>{
		var follows_clean = [];
		follows.forEach((follow) => {
			if(follow.followed) follows_clean.push(follow.followed._id);
		});

		follows_clean.push(req.user.sub);

		Publication.find().sort('-created_at').populate('user').paginate(page, itemsPerPage, (err, publications, total) => {	
			console.log()
			if(err) return res.status(500).send({message: 'Error al devolver Publicaciones'});
			if(!publications) return res.status(404).send({message: 'No hay Publicaciones'});
			return res.status(200).send({
				total_items: total, 
				pages: Math.ceil(total/itemsPerPage),
				page: page,
				items_per_page: itemsPerPage,
				publications
			});
		});
	});
}

function getAllPublications(req, res){
	var publication = new Publication();
	var params = req.body;
	var page = 1;
	if(req.params.page){
		page = req.params.page;
	}

	var itemsPerPage = 4;

	Publication.find().sort('-created_at').populate('user').paginate(page, itemsPerPage, (err, publications, total) => {	
		if(err) return res.status(500).send({message: 'Error al devolver Publicaciones'});
		if(!publications) return res.status(404).send({message: 'No hay Publicaciones'});
		return res.status(200).send({
			total_items: total, 
			pages: Math.ceil(total/itemsPerPage),
			page: page,
			items_per_page: itemsPerPage,
			publications
		});
	});
}


function getPublicationsUser(req, res){
	var publication = new Publication();
	var params = req.body;
	var page = 1;
	if(req.params.page){
		page = req.params.page;
	}
	var user = req.user.sub;
	if(req.params.user_id){
		user = req.params.user
	}

	var itemsPerPage = 4;

	Publication.find({user: user}).sort('-created_at').populate('user').paginate(page, itemsPerPage, (err, publications, total) => {	
		if(err) return res.status(500).send({message: 'Error al devolver Publicaciones'});
		if(!publications) return res.status(404).send({message: 'No hay Publicaciones'});
		return res.status(200).send({
			total_items: total, 
			pages: Math.ceil(total/itemsPerPage),
			page: page,
			items_per_page: itemsPerPage,
			publications
		});
	});
}

function getPublicationsbyUser(req, res){
	var publication = new Publication();
	var page = 4 ;
	if(req.params.page){
		page = req.params.page;
	}
	var user = req.params.id;
	var itemsPerPage = 4;

	Publication.find({user: user}).sort('-created_at').populate('user').paginate(page, itemsPerPage, (err, publications, total) => {	
		if(err) return res.status(500).send({message: 'Error al devolver Publicaciones'});
		if(!publications) return res.status(404).send({message: 'No hay Publicaciones'});
		return res.status(200).send({
			total_items: total, 
			pages: Math.ceil(total/itemsPerPage),
			page: page,
			items_per_page: itemsPerPage,
			publications
		});
	});
}

function getPublication(req, res){
	var publicationId = req.params.id;

	Publication.findbyId(publicationsId, (err, publication) =>{
		if(err) return res.status(500).send({message: 'Error al devolver Publicaciones'});
		if(!publications) return res.status(404).send({message: 'No existe la Publicacion'});

		res.status(200).send({publications});
	});
}

function deletePublication(req, res){
	var publicationId = req.params.id;
	Publication.find({'user': req.user.sub, '_id': publicationId}).remove((err) =>{
		if(err) return res.status(500).send({message: 'Error al borrar Publicaciones'});
		//if(!publicationRemoved) return res.status(404).send({message: 'No se ha borrado la Publicacion'});

		return res.status(200).send({message: 'Publicacion eliminada correctamente'});
	});
}

// subir archivos de imagen/avatar de usuario 
function uploadImage(req, res){
	var publicationId =  req.params.id;
	var update = req.body;

	if(req.files){
		var file_path = req.files.image.path; // ruta del archivo 
		var file_split = file_path.split('\\'); // nombr del archivo 
		var file_name=file_split[2];
		var ext_split = file_name.split('\.');
		var file_ext = ext_split[1];

		if(file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'gif'){

			Publication.findOne({'user': req.user.sub, '_id': publicationId}).exec((err, publication) => {
				if(publication){
					Publication.findByIdAndUpdate(publicationId, {file: file_name}, {new:true}, (err, publicationUpdated) =>{
						if(err) return res.status(500).send({message: 'Error en la peticion'});

						if(!publicationUpdated) return res.status(404),sebd({message:'No se aha podido actualizar el usuario'});

						return res.status(200).send({publication: publicationUpdated});
					});					
				}else{
					return removeFilesofUpload(res, file_path, 'No tienes permiso para actualizar esta publicacion');
				}
			});
			//actualizar documento de publication

		}else{
			return removeFilesofUpload(res, file_path, 'Extension no valida');
		}
	}else{
		return res.status(200).send({message: 'No se han subido archivos o imagenes'})
	}
}

function removeFilesofUpload(res, file_path, message){
	fs.unlink(file_path, (err) =>{
		return res.status(200).send({message: message});
	}); 	
}

function getImageFile(req, res){
	var image_file = req.params.imageFile; //Parametro que se recoge por la url, ese nombre de ficheco que se pase por la url, va a ser el que va a recibir el metodo, y va a sacar esa imagen del sistema de ficheros y nos la va a regresar 
	var path_file = './upload/publications/'+image_file;
	fs.exists(path_file, (exists) =>{
		if(exists){
			res.sendFile(path.resolve(path_file)); // esucpe el fichero en crudo 
		}else{
			return res.status(200).send({message: 'No existe la imagen...'})
		}
	});
}
module.exports = {
	probando,
	savePublication,
	getPublications,
	getPublicationsUser,
	getPublication,
	deletePublication,
	uploadImage,
	getImageFile,
	getPublicationsbyUser,
	getAllPublications
}