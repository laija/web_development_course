 /*
 Fetch (es un sustituto) es una manera de hacer peticiones a un back end 
 Fetch y peticiones a servicios / api rest 
 peticiones asincronas a un servidor 
 */
 
 'use-strict'
 var usuarios=[];
 var  div_usuarios = document.querySelector("#usuarios");

 //fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://reqres.in/api/users?page=1') 
	.then(data => data.json())	// captura los datos, los convertimos a json de la variable data 
	.then(users => {
		usuarios = users.data;	// una vez que los datos estan recogido  log guardamos en la variable usuario especificando el campo data para que solo nos de los usuriarios
		console.log(usuarios);
		usuarios.map((user,i) => {
			let nombre = document.createElement('h2');
			nombre.innerHTML =  i + "- " + user.first_name + " " + user.last_name;
			div_usuarios.appendChild(nombre);
			document.querySelector(".loading").style.display = 'none';
		});
		
	});


