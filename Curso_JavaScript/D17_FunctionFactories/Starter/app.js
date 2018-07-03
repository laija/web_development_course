console.log('asdfasdfasdf');

function makeGreeting(language){
	return function(firsname, lastname){

		if(language === 'en'){
			console.log('Hello ' + firsname + ' ' + lastname);
		}

		if(language === 'es'){
			console.log('Hola ' + firsname + ' ' + lastname);
		}		
	}
}


var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetSpanish('John', 'Doe');
greetEnglish('John', 'Doe');
