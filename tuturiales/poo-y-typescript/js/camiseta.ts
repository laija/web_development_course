// Interface 
/*
Las interfaces son un contrato en el que definimos que propiedades y que metodos obligatorios va a tener una clase 
*/
interface CamisetaBase{
	setColor(color);
	getColor();
}

/*
Un decorador es un patron de siseño que nos permite por medio de unos metadatos que nosotros le definimos a una clase a hacer una copia de esa misma clase o que hag anas cosas u otras segun los parametros que se le pasen 
Clase (molde del objeto) */
@estampar('Gucci Gang') // esto permitira qu e la siguiente clase tenga un nuevo 


//La clase se tiene que llamar igual que el fichero y se debe de utilizar mayuscula cada vez que sea posible 
// clase (molde del objeto)
class Camiseta implements CamisetaBase{
// Propiedades (caracteristicas del objeto)
	private color: string ;
	private modelo: string;
	private marca: string;
	private talla: string;
	private precio: number;

// Metodos (funciones o acciones del objeto)

/*	public		: Significa que podemos acceder a las propiedades y metodos desde cualquier lugar, clase actual, clase que las heredan u desde otras clases 
	protected	: Se puede acceder al atributo o metodo desde la clase que la define o desde otra clase que herede esa misma clase 
	private		: Significa que los atributos o metodos son solamente accesibles desde la clase que los define
*/

	public setColor(color){
		this.color = color;
	}

	public getColor(){
		return this.color;
	}

	/*Un constructor es un metodo para darle valores iniciales a un atributo al crearlo y nunca regresa ningun dato*/
	constructor(color, modelo, marca, talla, precio){
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}
}



// Decorador
// esto agregara un metodo a  una clase
function estanpar(logo: string) {
	return function(target: function){
		target.prototype.estampacion = function():void{
			console.log("Camiseta estampada con el logo de: " + logo);
		}
	}
}


/* Herencia 
Es un mecanismo en el que una clase hija puede heredar las caracteristicas que tiene una clase padre 
*/
class Sudadera extends Camiseta{
	public capucha: boolean;

	setCapucha(capucha: boolean){
		this.capucha = capucha;
	}

	getCapucha(){
		return this.capucha;
	}
}

var sudadera_nike = new Sudadera();//"Rojo", "Manga Larga", "Nike", "L", 78);
//sudadera_nike.setCapucha(true);
//sudadera_nike.setColor("Gris jaspeado");
console.log(sudadera_nike);

var camiseta = new Camiseta("asdf", "Asdf a", "Asdf ", 54);
camiseta.estampacion(); //este metodo se logra obtener gracias al decorador
console.log(camiseta);
// cuando yo instancie este objeto  y la meta en una variable, tendre todas las propiedades publicas para modificarls
/*
var camisetas = new Camiseta();
camisetas.setColor("Verde", "manga larga", "nike", "1", 14 );
camisetas.setColor("Roja")

var playera = new Camiseta();
playera.setColor("Verde")
playera.modelo = "Manga corta";
playera.marca = "A";
playera.talla = "M";
playera.precio = "11";

console.log(camisetas);*/