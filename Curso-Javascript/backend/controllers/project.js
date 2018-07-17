'use strict'

// para crear un nuevo projecto hay que importar modelo para poder 
var Project  = require('../models/project');
var fs = require('fs');

var controller  = {
	home: function(req, res){
		return res.status(200).sed({
			message: 'Soy la home'
		});
	},

	test: function(req, res){
		return res.status(200).send({
			message: "soy el metodo o accion test del controlador de project "
		});
	},
	saveProject: function(req, res){
		var project = new Project();
		var params = req.body;
		console.log(params);
		project.name = params.name;
		project.description = params.description;
		project.category = params.category;
		project.year = params.year;
		project.langs = params.langs;
		project.image = null;

		project.save((err, projectStored) =>{
			if(err) return res.status(500).send({message: 'Error al guardar el documento'});
			if(!projectStored) return res.status(404).send({message: 'No se ha posido guardar el projecto'});
			return res.status(200).send({project: projectStored});
		});
	},

	getProject: function(req, res){
		var  projectId = req.params.id;

		if( projectId == null) return res.status(404).send({message: 'El projecto no existe because null.'});

		Project.findById( projectId, (err, project) =>{
			if(err) return res.status(500).send({message: 'Error al Devolver los datos.' });

			if(!project) return res.status(404).send({message: 'El projecto no existe.'});

			return res.status(200).send({
				project
			});
		});
	},

	getProjects: function(req, res){
		Project.find({}).sort('-year').exec((err, projects) =>{
			if(err) return res.status(500).send({message: 'Error el devolver los datos.'});

			if(!projects) return res.status(404).send({message: 'No hay mensajes para mostar'});

			return res.status(200).send({projects});
		});
	},


	updateProject: function(req, res){
		var projectId =  req.params.id;
		var update = req.body;
		Project.findByIdAndUpdate(projectId, update, {new: true}, (err, projectUpdated) =>{
			if(err) return res.status(500).send({message: 'Error al actulizar'});

			if(!projectUpdated) return res.status(404).send({message: 'No existe el projecto para actulizar'});

			return res.status(200).send({
				project: projectUpdated
			});
		});
	},

	deleteProject: function(req, res){
		var projectId = req.params.id;

		Project.findByIdAndRemove(projectId, (err, projectRemoved) =>{
			if(err) return res.status(500).send({message:'Nose ha podido borrar el proyecto'});

			if(!projectRemoved) return res.status(404).send({ message: "No se pudo eliminar ese projecto"});

			return res.status(200).send({
				project: projectRemoved
			});
		});
	},

	uploadeImage: function(req, res){
		var projectId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){ 
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif' ){
				Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true },(err, projectUpdated) =>{
					if(err) return res.status(200).send({message: 'La imagen no se ha subido'});

					if(!projectUpdated) return res.status(404).send({message: 'el projecto no existe y no se subio la imagen '});
					return res.status(200).send({
						project: projectUpdated
					});
				});
			}else{
				fs.unlink(filePath, (err) =>{
					return res.status(500).send({message: 'La extension no es valida'});
				});
			}

		}else {
			return res.status(200).send({
				message: fileName
			});
		}
	}
};


module.exports =  controller;