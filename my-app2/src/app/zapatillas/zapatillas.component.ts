import {Component, OnInit} from '@angular/core';
import {Zapatilla} from '../models/zapatilla'

@Component({
	selector: 'zapatillas',
	templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
	//	propiedades
	public titulo: string = "Component de zapatillas";
	public zapatillas: Array<Zapatilla>;
	public marcas: String[];
	public color: string;
	public mi_marca: string;

	constructor(){
		this.mi_marca = "Fila";
		this.color = 'blue';
		this.marcas = new Array();
		this.zapatillas=[ // this is an array of objects 
		new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, true);
		new Zapatilla('Nike Runner', 'Nike', 'Gris', 60, true);
		new Zapatilla('NB classic', 'NB', 'Verde', 70, false);
		new Zapatilla('Classic', 'Converse', 'Verde', 70, false);
		new Zapatilla('Classic', 'Converse', 'Blue', 70, false);

		];
	}
	ngOnInit(){
		console.log(this.zapatillas);
		this.getMarcas();
	}

	// recorrer coleccion de objetos usanto el metodo 
	getMarcas(){
		this.zapatillas .forEach((zapatilla, index) =>{
			if(this.marcas.indexOf(zapatilla.marca) < 0){
				this.marcas.push(zapatilla.marca);
			}
		});
		console.log(this.marcas);
	}

	getMarca(){
		alert(this.mi_marca);

	}

	addMarca(){
		this.marcas.push(this.mi_marca)
	}

	borrarMarca(index){
		//delete this.marcas[index];
		this.marcas.splice(index,1);
	}

	onBlur(){
		console.log("Has salido del imput");
	}

	mostrarPalabra(){
		alert(this.mi_marca);
	}
}

