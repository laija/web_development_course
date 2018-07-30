import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'crear-producto',
  templateUrl: './producto-add.component.html',
  styleUrls: ['./producto-add.component.css'],
  providers: [ ProductoService]
})
export class ProductoAddComponent implements OnInit {
	public titulo: string;
	public producto: Producto;
  constructor() { 
  	this.titulo = 'Crear un Nuevo Producto';
  	this.producto = new Producto('','','','');
  }

  ngOnInit() {
  	console.log("Producto-addcomponent.ts cargando");
  }

  onSubmit(){
  	console.log(this.producto);
  }

}
