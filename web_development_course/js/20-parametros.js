"use-script"

//parametros REST SPREAD

// parametro tipo REST 
// ... va a meter todos los valores que yo le estoy pasando dentro de un array 
function listadoFrutas(fruta1,fruta2,...resto_de_frutas){
	console.log("Fruta 1: " + fruta1);
	console.log("Fruta 2: " + fruta2);

}

listadoFrutas("Naranja","Manzana","Sandia","Pera","Coco");

console.log("----------------------------------------")

//Parametro tipo SPREAD
// al poner los tres puntos adelente hace un split de los elementos del array 
var frutas = ["Coco","Pera"]
listadoFrutas(...frutas,"Naranja","Manzana");