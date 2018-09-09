var person = {
	firstname : 'John',
	lastname : 'Doe',
	getFullName: function(){
		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;
	}
}


var logName = function(lang1, lang2){
	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + ' ' + lang1 + ' and ' + lang2);
	console.log('----------');
}

var logPersonName = logName.bind(person); // using bind we pass the  object we want the variable this to be  
logPersonName('en','es');

logName.call(person,'en', 'es');
logName.apply(person, ['en', 'es']);


(function(lang1, lang2){
	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + ' ' + lang1 + ' and ' + lang2);
	console.log('----------');
}).apply(person,['es', 'en']);




//function borrowing
var person2 = {
	firstname: 'Jane',
	lastname: 'Doe'
}
console.log(person.getFullName.apply(person2));