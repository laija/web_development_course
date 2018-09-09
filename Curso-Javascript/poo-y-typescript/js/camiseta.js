var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
Un decorador es un patron de siseño que nos permite por medio de unos metadatos que nosotros le definimos a una clase a hacer una copia de esa misma clase o que hag anas cosas u otras segun los parametros que se le pasen
Clase (molde del objeto) */
var Camiseta = /** @class */ (function () {
    /*Un constructor es un metodo para darle valores iniciales a un atributo al crearlo y nunca regresa ningun dato*/
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    // Metodos (funciones o acciones del objeto)
    /*	public		: Significa que podemos acceder a las propiedades y metodos desde cualquier lugar, clase actual, clase que las heredan u desde otras clases
        protected	: Se puede acceder al atributo o metodo desde la clase que la define o desde otra clase que herede esa misma clase
        private		: Significa que los atributos o metodos son solamente accesibles desde la clase que los define
    */
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar('Gucci Gang') // esto permitira qu e la siguiente clase tenga un nuevo 
        //La clase se tiene que llamar igual que el fichero y se debe de utilizar mayuscula cada vez que sea posible 
        // clase (molde del objeto)
    ], Camiseta);
    return Camiseta;
}());
// Decorador
// esto agregara un metodo a  una clase
function estanpar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
/* Herencia
Es un mecanismo en el que una clase hija puede heredar las caracteristicas que tiene una clase padre
*/
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var sudadera_nike = new Sudadera(); //"Rojo", "Manga Larga", "Nike", "L", 78);
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
