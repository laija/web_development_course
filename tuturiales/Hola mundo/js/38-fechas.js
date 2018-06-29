'use-strict'

var fecha = new Date();
var  year = fecha.getFullYear(); // getYear para 2 digitos 
var Month = fecha.getMonth(); // empezando por cero 
var dia = fecha.getDate();
var hora = fecha.getHours();
var textoHora = `
	The year is: ${year}
	Month is ${Month}
	Days is ${dia}
	Hrs is ${hora}
`;
console.log(textoHora);
console.log(Mathceil(Math.random()*1000));