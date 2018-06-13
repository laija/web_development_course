/*

*/

// array as an object
 var lenguajes = new Array("PHP","C++");
 var nombres =["Luis", 52, true];


document.write("<h1>Lenguajes de programacion dle 2018</h1>");
document.write("<ul>");
lenguajes.forEach((elemento, indice, data)=>{
	document.write("<li>" + indice + "-" + elemento + "</li>");
//foreach itera todo el array, arguento uno es elemento, el 2 posicion y el 3 es el arrelgo entero, no importa el nombre sino la posicion 
});

document.write("</ul>");


console.log("--------------------");
/*
loa array multidimencionales con arrays dentro de otros arrays 
*/

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ["La verdad duele", 'La vida es bella', 'Gran torino', "Mujeres Almodobar"];
var cine = [categorias, peliculas];

console.log(cine);
console.log(cine[0][1]), // accediento a Terror

console.log("--------------------");

peliculas.push("Batman"); // annadir elemento al array
console.log(peliculas);
console.log("--------------------");
peliculas.pop();// elimina el ultimo elemento de un array 
console.log(peliculas);
console.log("--------------------");
// elimina elemento concreto de un array 
var indice = peliculas.indexOf("Mujeres Almodobar");
if (indice > -1){
	peliculas.splice(indice,1); //splite permite borrar cuanod campos queremos 
}
console.log(peliculas);

console.log("--------------------");
var peliculasString = peliculas.join(); // convertir array a string separado por comas
console.log(peliculasString);

console.log("--------------------");
var cadena = "texto1, text2, texto3"; // convertir testo en un array y nosotros ingresamos el delimitador 

var cadenaArray = cadena.split(", ");

console.log("--------------------");
console.log(peliculas.sort()); // ordenar por orden alfabetico

console.log("--------------------");
console.log(peliculas.reverse()); // darle el orden inverso 

console.log("--------------------");

// recorrer un arrary usando un for 
for(let leguaje in lenguajes){
	document.write("<li>" + lenguajes[leguaje] + "</li>")
}

console.log("--------------------");
// buscar dentro de un array 

var busqueda = lenguajes.find( leguaje => leguaje == "PHP");

console.log(busqueda);

// eccontrar el indice de un string 
busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP")
console.log(busqueda);
console.log("--------------------");

// comprobar si un precio es mayor o igual 
var precios = [10,15,23,90];
 busqueda = precios.some(precio => precio > 100);
console.log(busqueda)




