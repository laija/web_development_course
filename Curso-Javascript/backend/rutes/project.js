'use strict'

var express = require('express');
var ProjectController = require('../controllers/project'); // importing controller

var router = express.Router();

// middleware algo que se ejecuanta antes del metodo del controlador 
var  multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads'});


router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/saveProject', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject); // When you hit this url the ProjectController gets loaded y el metodo getProject()
router.get('/projects', ProjectController.getProjects);
router.put('/project/:id', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.deleteProject);
router.post('/upload-image/:id', multipartMiddleware, ProjectController.uploadeImage);
router.get('/get-image/:image', ProjectController.getImageFile);
module.exports = router;
