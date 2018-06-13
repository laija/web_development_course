
'use-strict'
/* Java script object notation,son array associativos */

var pelicula ={
	titulo: 'Barman vs Superman',
	year: 2017,
	pais: 'Estados Unidos',
};


console.log(pelicula);
pelicula.titulo = "Superman Begings";
console.log(pelicula);

var  peliculas = [
	{titulo: "La verdad duele",year: 2016, pais: "Francia"}, pelicula
];

var caja_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
	var parrafo = document.createElement("p");
	parrafo.append(peliculas[index].titulo);
	caja_peliculas.append(parrafo);
}
