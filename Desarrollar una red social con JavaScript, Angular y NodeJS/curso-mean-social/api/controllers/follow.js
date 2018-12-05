'use script'


var mongoosePaginate = require('mongoose-pagination');

var User = require('../models/user');
var Follow = require('../models/follow');

function saveFollow(req, res){
	var  params = req.body;
	var follow = new Follow();
	follow.user = req.user.sub;
	follow.followed = params.followed;

	follow.save((err, followStored) =>{
		if(err) return res.status(500).send({message: 'Error al guardar el seguimiento'});

		if(!followStored) return res.status(404).send({message: 'El seguimiento no se ha guardado'});

		return res.status(200).send({message: followStored});
	});	
}

function deleteFollow(req, res){
	var userId = req.user.sub;
	var followId = req.params.id;

	Follow.find({'user': userId, 'followed': followId}).remove(err => {
		if(err) return res.status(500).send({message: 'Error al dejar de seguir'});

		return res.status(200).send({message: 'El follow se ha eliminado'});
	});
}

function getFollowingUsers(req, res){
	var userId = req.user.sub;
	var followed = req.params.id;
	if(req.params.id && req.params.page){
		userId = req.user.id;
	}

	var page =1; // page by default

	if(req.params.page){
		page = req.params.page;
	}else {
		page  = req.params.id;
	}
	
	var itemsPerpage = 4;
	// encontrar a todos los usuarios que sigo 
	Follow.find({user: followed}).populate({path: 'followed'}).paginate(page, itemsPerpage, (err, follows, total) =>{
		if(err) return res.status(500).send({message: 'Error en el servidor'});

		if(!follows) return res.status(404).send({message: 'No te sigue ningun usuario'});
		followUserIds(req.user.sub).then((value)=>{
			return res.status(200).send({
				total: total, 
				pages: Math.ceil(total/itemsPerpage),
				follows,
				user_following: value.following, 
				users_follow_me: value.followed,
			});
		});
	});
}

		

			
function getFollowedUsers(req, res){
	var userId = req.user.sub;

	if(req.params.id && req.params.page){
		userId = req.user.id;
	}

	var page =1; // page by default

	if(req.params.page){
		page = req.params.page;
	}else {
		page  = req.params.id;
	}

	var itemsPerpage = 5;
	// encontrar a todos los usuarios que sigo 
	Follow.find({followed: userId}).populate({path: 'user'}).paginate(page, itemsPerpage, (err, follows, total) =>{
		if(err) return res.status(500).send({message: 'Error en el servidor'});

		if(!follows) return res.status(404).send({message: 'No estan siguiendo a ningun usuario'});

		followUserIds(req.user.sub).then((value)=>{
			return res.status(200).send({
				total: total, 
				pages: Math.ceil(total/itemsPerpage),
				follows,
				user_following: value.following, 
				users_follow_me: value.followed,
			});
		});
	});	
}

// Devolver listado usuarios
function getMyFollows(req, res){
	var userId = req.user.sub;
	
	// Para regresar usuarios que sigo
	var find  =  Follow.find({user: userId});

	// Regresar usuarios que me siguen 
	if(req.params.followed){
		find = Follow.find({followed: userId});
	}

	find.populate('user followed').exec((err, follows) => {
		if(err) return res.status(500).send({message: 'Error en el servidor'});

		if(!follows) return res.status(404).send({message: 'No sigues a ningun usuario'});

		return res.status(200).send({follows});
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


module.exports = {
	saveFollow,
	deleteFollow,
	getFollowingUsers,
	getFollowedUsers,
	getMyFollows
}