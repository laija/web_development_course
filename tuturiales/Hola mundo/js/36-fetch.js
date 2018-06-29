 /*
 Fetch (es un sustituto) es una manera de hacer peticiones a un back end 
 Fetch y peticiones a servicios / api rest 
 peticiones asincronas a un servidor 
 */
 
'use-strict'
var  div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
 //fetch('https://jsonplaceholder.typicode.com/users')
	getUsuarios()
	.then(data => data.json())	// captura los datos, los convertimos a json de la variable data 
	.then(users => {
		listadoUsuarios(users.data)	// una vez que los datos estan recogido  log guardamos en la variable usuario especificando el campo data para que solo nos de los usuriarios
		return getJanet();
		})
		.then(data => data.json())
		.then(user => {
			mostratJanet(user.data);
		});
	

function getUsuarios(){
	return(fetch('https://reqres.in/api/users'));
}

function getJanet(){
	return(fetch('https://reqres.in/api/users/2'));
}
	
	
function listadoUsuarios(usuarios){
	usuarios.map((user,i) => {
		let nombre = document.createElement('h2');
		nombre.innerHTML =  i + "- " + user.first_name + " " + user.last_name;
		div_usuarios.appendChild(nombre);
		document.querySelector(".loading").style.display = 'none';
	});
}


function mostratJanet(user){
		console.log(user);
		let nombre = document.createElement('h4');
		let avatar = document.createElement('img');
		nombre.innerHTML = user.first_name + " " + user.last_name;
		avatar.src =user.avatar;
		avatar.width = '100';
		div_janet.appendChild(nombre);		
		div_janet.appendChild(avatar);
		document.querySelector(".loading2").style.display = 'none';
	
}