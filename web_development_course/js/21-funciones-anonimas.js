'use-strict'

// Funciones Anonimas 

// el conjunto de instrucciones (function ) que no tiene nombre
// de utiliza para hacer callback (funicones que se ejecuta dentro de otras )

var pelicula = function(nombre){
	return "La pelucula es:" + nombre;
}

console.log(pelicula("Nombre_de_la_pelicula"))


console.log("----------------------------------")

function sumame(numero1,numero2,sumaYmuestra,sumaPorDos){
	var sumar = numero1 + numero2;
	sumaYmuestra(sumar);
	sumaPorDos(sumar);
	return sumar;
}
// es una funcion anonima que no tiene ningun nombre sino que se pasa de manera anomina como parametro a otra funcion y 
// que se la pasa como parametro a otra funcion 

sumame(5, 7,function(dato){
	console.log("La suma es: ", dato);
}, 
function(dato){
	console.log("La suma por dos es: ",(dato*2));
}
);
