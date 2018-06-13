'use-strict'

/*

*/

// Transformacion de texto 
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript ";
var texto2 = "es muy buen curso";


var dato = numero.toString();
	dato = texto1.toUpperCase();
	dato = texto1.toLowerCase();
//console.log(typeof dato);
console.log(dato);

// calcular longitud 

var nombre ; // undefined 
nombre = "" ; //length 0
nombre = ["hola", "nada"]; // length 2 
console.log(nombre.length);

// Concatenar: es unir texto 

var textoTotal = texto1 + texto2;
textoTotal = texto1.concat(" " + texto2);
console.log(textoTotal)

console.log("--------------------------------")
// sirve para encontar la primera conincidencia de la palabra en el string
var busqueda = textoTotal.indexOf("curso");
console.log(busqueda)

// lastIndexOf muestra la ultima paricion de esa palabra
busqueda = textoTotal.lastIndexOf("curso");
console.log(busqueda);

// search sirve mostrar a partir que caracter aparece el string de busqueda 
busqueda = textoTotal.search("curso");
console.log(busqueda);

// si el string no se encuentra regresaun -1

// match regresa una array 
busqueda = textoTotal.match("curso");
console.log(busqueda);

// substr sirve par extraer los caracteres de un string desde una posicion hasta el numero de caracteres que insertes 
busqueda = textoTotal.substr(14,5);
console.log(busqueda);

// charAt sirver para sacar una letra del string segun una posicion en especifico 
busqueda = textoTotal.charAt(14);
console.log(busqueda);

// startWith srive para buscar texto en especifico al inicio del string y regresa un boolean 
busqueda = textoTotal.startsWith("Bienvenido");
console.log(busqueda);

// endsWith srive para buscar texto en especifico al final del string y regresa un boolean 
busqueda = textoTotal.endsWith("curso");
console.log(busqueda)

// includes srive para buscar texto en especifico dentro del string y regresa un boolean 
busqueda = textoTotal.includes("curso");
console.log(busqueda)

// replace sirve para reemplazar un string dentro de un string 
busqueda = textoTotal.replace("curso","economia");
console.log(busqueda);

// slice separe un string a partir del caracter que yo quiera 
busqueda = textoTotal.slice(14);
console.log(busqueda);

busqueda = textoTotal.slice(14,22);
console.log(busqueda);

// split mete todo dentro de un array   
busqueda = textoTotal.split();
console.log(busqueda);

busqueda = textoTotal.split(" ");
console.log(busqueda);

// trim recorta los spacios por delante y por detras que tenga le string 
busqueda = textoTotal.trim();
console.log(busqueda);

