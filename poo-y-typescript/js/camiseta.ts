
//La clase se tiene que llamar igual que el fichero y se debe de utilizar mayuscula cada vez que sea posible 
// clase (molde delobjeto)
class Camiseta{
// Propiedades (caracteristicas del objeto)
	public color: string ;
	public modelo: string;
	public marca: string;
	public talla: string;
	public precio: number;

// Metodos (funciones o acciones del objeto)
}

// cuando yo instancie este objeto  y la meta en una variable, tendre todas las propiedades publicas para modificarls

var camisetas = new Camiseta();
camisetas.color = "Rojo";
camisetas.modelo = "Manga larga";
camisetas.marca = "Nike";
camisetas.talla = "L";
camisetas.precio = "10";


var playera = new Camiseta();
playera.color = "Verde";
playera.modelo = "Manga corta";
playera.marca = "A";
playera.talla = "M";
playera.precio = "11";

console.log(camisetas, playera);