/*var name = 'John Armenta'; //strings are always on ''
console.log(name)

var lastName = 'Smith'
console.log(lastName)

var age = 22
console.log(age)

var fullAge = ( age > 21)
console.log(fullAge)*/
/*
var name = 'John';
var age = 26;

//console.log(name + " " + age);
//console.log(age + age);

var job, isMarried;	// var is only use when variable is first declared
//console.log(job);	//variable is not defined 

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + ".")

age = 'Thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + ".")

//var lastName = prompt('What is the lastName');
//console.log('Welcome senod y senora ' + lastName + ".")

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + ".")

*/
///////////////////////////////////////////////////////////
/*
// Lecture: Operators
var now = 2016
var birthYear = now - 26 ;

birthYear = now - 26 * 2;
console.log(birthYear);

var ageJohn = 30 ;
var ageMark = 30 ;
ageJohn =(3 + 5) * 4 -6 
ageJohn++;	// incremento+ unitario 
ageMark *= ; // ageMark = ageMark * 2
console.log(ageJohn)
console.log(ageMark)
*/
/*
///////////////////////////////////////////////////////////
// Lecture : if/else statements 

var name = 'John';
var age = 26;
var isMarried = 'no'
if (isMarried === 'yes'){
	console.log(name + ' is maried');
} else{
	console.log(name + ' will hopefully marry soon :)');
}

isMarried = true;
if(isMarried){
	console.log('Yes');
}else{
	console.log('No!');
}

if(23 == '23'){
	console.log('Are equal!');
}

if(23 ===! '23'){
	console.log('Are not equal');
}
*/
///////////////////////////////////////////////////////////
// Lecture : boolean logic and switch 
/*
var age = 26;

if (age < 20){
	console.log('John is a teenager');
} else if( age =>20 && age < 30){
	console.log('John is a young man.')
}
else {
	console.log('John is a man.');
}

var job = 'teacher';

//job =prompt('What does John do?')
switch (job){
	case 'teacher':
		console.log('John teaches kisds.');
		break;
	case 'driver':
		console.log('John drives a cab in Lisbon');
		break
	case 'cop':
		console.log('John helps fight cirme');
		break
	default:
		console.log('John does something else');

}
*/
///////////////////////////////////////////////////////////
// Lecture : Codding challenge 1 
/*

JohnAge = 2;
FriendAge = 25;

JohnHeight = 175;
FriendHeight = 175;

JohnScore = JohnHeight + 5 * JohnAge
FriendScore = FriendHeight + 5 * FriendAge
if (JohnScore > FriendScore) {
	console.log("The winner is John with" + JohnScore);
} else if(JohnScore < FriendScore){
	console.log("The winner is John's friend with " + FriendScore);
} else{
	console.log("It is a tie")
}
*/

///////////////////////////////////////////////////////////
// Lecture : Functions
/*
function calculateAge(yearofBirth)
{
	var age = 2018 - yearofBirth;
	return age;
}

var yearofBirth = prompt('Please enter year of birth.');
var age = calculateAge(yearofBirth);
console.log('age is ' + age +'.');

function yearsUntilRetirement(name,yearofBirth)
{
	var age = calculateAge(yearofBirth) ;
	var age_retirement = 65 - age;
	if (age_retirement >= 0){
		console.log('Years until retirement for ' + name + ' : ' + age_retirement + '.');
	}	else {
		console.log(name + ' is retired already.')
	}
}

yearsUntilRetirement('Luis',yearofBirth)
*/

///////////////////////////////////////////////////////////
// Lecture : Statements and Expressions 
/*
//functions statement

function someFun(par){
	//code
}

//Fuction expression 

var someFun = function(par){
	//code
}

//Expression 
3 + 4;
var x =3

//statements 
if(x === 3 ){
	// do something 
}
*/

///////////////////////////////////////////////////////////
// Lecture : Arrays 
/*
var names = ['John','Jane','Mark'] ;
var year = new Array(1990,1969,1948);

console.log(names[0]);
names[1] = 'Ben' ;
console.log(names);

var john = ['John' , 'Smith' , 1990];
john.push('Blue');
john.unshift('Mr.'); // add element at the bgining of the array
john.pop(); // removes las element of the array 
john.shift();  // removes first element of the array 

console.log(john);

//alert(john.indexOf('Smith')) ; // return the posion the element we past in )
if(john.indexOf('teacher') === -1 ){
	console.log('John is not a teacher.');
}
else{
	console.log('John is a teacher')
}

*/

///////////////////////////////////////////////////////////
// Lecture : Objects 
/*
//creating object john 
var  john = {
	name: 'John',
	lastName: 'Smith',
	yearofBirth: '1989',
	job: 'teacher',
	isMarried: false
}

console.log(john);
//accesing data in object 
console.log(john.lastName);
console.log(john['lastName']);

//use variable to acces property from object 
var xyz = 'job';
console.log(john[xyz]);

//Data mutation
john.lastName = 'Miller';
john['job'] = 'programer'
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearofBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;
console.log(jane);
*/

///////////////////////////////////////////////////////////
// Lecture : Objects and Methods

/*
// v1.0
var  john = {
	name: 'John',
	lastName: 'Smith',
	yearofBirth: 1999,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() { // this is a function expression 
		return 2018 - this.yearofBirth; // this means this object
	}
};

//console.log(john.calculateAge(1989));
console.log(john.calculateAge);
// assig age value to age Johns property 
age = 26 
john.age = age ;
console.log(john);


var  john = {
	name: 'John',
	lastName: 'Smith',
	yearofBirth: 1999,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() { // this is a function expression 
		this.age = 2018 - this.yearofBirth; // this means this object
	}
};

john.calculateAge();
console.log(john.age);
console.log(john);


var  mike = {
	name: 'mike',
	lastName: 'Smith',
	yearofBirth: 1950,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() { // this is a function expression 
		this.age = 2018 - this.yearofBirth; // this means this object
	}
};

mike.calculateAge();
console.log(mike.age);
console.log(mike);
*/


///////////////////////////////////////////////////////////
// Lecture : Loops and Iteration 
/*
for (var i = 0; i < 10 ; i++){
	console.log(i);
}

var names = ['John', 'Jane', 'Mary' , 'Mark'];
for (names.length -1 ; i > -1 ; i--){
	console.log(names[i]);
}
*/
var names = ['John', 'Jane', 'Mary' , 'Mark'];
var i = 0;
while (i < names.length) {
	if (i === 3){
		continue;
	console.log(names[i]);
	i++
	}
}