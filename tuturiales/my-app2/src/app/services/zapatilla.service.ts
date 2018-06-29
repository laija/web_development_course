/*
lo primero que tiene que tener un servicio es el objeto injectable  
*/

import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla' // Cargamos nuestro modelo de datos, es la clase zapatillas 

@Injectable() // this is to be able to inject our service in other classes y no tener ue invocando el objeto o creandolo siempre 

export class ZapatillaService{
	public zapatillas: Array<Zapatilla>;
	constructor(){
		this.zapatillas=[ // this is an array of objects 
		new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, true),
		new Zapatilla('Nike Runner', 'Nike', 'Gris', 60, true),
		new Zapatilla('NB classic', 'NB', 'Verde', 70, false),
		new Zapatilla('Classic', 'Converse', 'Verde', 70, false),
		new Zapatilla('Classic', 'Converse', 'Blue', 70, false)
		]
	}


	getZapatillas():Array<Zapatilla>{
		return this.zapatillas;
	}

	getTexto(){
		return "Hola mund desde un servicio";
	}
}
