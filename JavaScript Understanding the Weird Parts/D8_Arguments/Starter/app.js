function  greet(firstname, lastname, language ){
	//language = language || 'en';

	if( arguments.lengh === 0 ){
		console.log('Missing Paramneters!');
		console.log('----------');	
		return;
	}
	console.log(firstname);
	console.log(lastname);
	console.log(language);
	console.log(arguments);	
	console.log('----------');	
}



greet();

greet('luis','laija');