var fistname = 'John';
var greeting = 'hola';
(function(global, name){
	name = name || 'luis';
	var greeting = 'Inside IIFE: Hello';
	global.greeting = "Holas"
	console.log(greeting  + ' ' + name );
}(window)); // IIFE

console.log(greeting);