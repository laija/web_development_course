import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  providers: [ ProductoService ],
  styleUrls: ['./productos.component.css'],
  
})
export class ProductosComponent implements OnInit{
  public titulo: string;
  public productos: Producto[]; 
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService: ProductoService,
  	) { 
  	this.titulo = 'Listado de productos';
  }

  ngOnInit() {
  	console.log(' Productos components cargado');
    this._productoService.getProductos().subscribe(
      result => {
        this.productos = result.data;
        if(result.code != 200){
          console.log(result);
        }else {
          this.productos = result.data;
        }
      },
      error =>{
        console.log(<any>error);
      }
      );
  }

}
