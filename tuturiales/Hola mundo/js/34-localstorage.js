'use-strict'

/* Local storage 
	se una memoria en el navegador guardada 
	hay un local storage por dominio 
*/

// Comprobar si el local storage esta disponible  
if(typeof(Storage) !== 'undefined'){
	console.log("Local storage disponible!!!");
}else{
	console.log("Local storage no esta disponible")
}

// Guardar datos en el local storage 
localStorage.setItem("titulo","Curso de java script");

// Recuperar elemento 
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// Guardar objetos en el local storage, hay que convertir los datos que se van a enviar via http to sting igual que en el local storage 
// y la forma de enviar informacion a un API es un Json 
var usuario = {
	nombre: "Luis Laija",
	email: "laija11@hotmail.com",
	web: "victorrobles.com.es"
}

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto del local storage 
var userjs = JSON.parse(localStorage.getItem("usuario"));

document.querySelector("#datos").append(userjs.web + " - " + userjs.nombre);

// to remove  item user from the ocal storage 
localStorage.removeItem("user");

// to clean the local storage  completely 
localStorage.clear();