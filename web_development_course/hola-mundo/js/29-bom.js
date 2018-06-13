"use-strict"

// Bom - Browser object model 

function getBom(){
	// ver la altula del la ventana del navegador - espacio de consola 
	console.log(window.innerHeight);
	// ver la anchura de la pantalla - espacio de consola 
	console.log(window.innerWidth);
	// para obtener al anchula y altua de la venta real 
	console.log(screen.width);
	console.log(screen.height);
	//get current url 
	console.log(window.location);
	//get current url 
	console.log(window.location.href);
}

getBom();

console.log("-----------------------");

function redirect(url){
	// redirigir a una nueva url al cambiar el href 
	window.location.href = url;
}
//redirect("http://google.com");

function abrirVentana(url){
	window.open(url,"","width=400,height=300");
}
abrirVentana("http://google.com");

