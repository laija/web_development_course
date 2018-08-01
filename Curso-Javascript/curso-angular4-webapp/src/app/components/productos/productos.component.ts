import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Usuarios } from '../../models/producto';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  providers: [ ProductoService ],
  styleUrls: ['./productos.component.css'],
  
})
export class ProductosComponent implements OnInit{
  public titulo: string;
  public usuarios: Usuarios[];
    constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService: ProductoService,
    ) { 
    this.titulo = 'Listado de productos';
  }

  ngOnInit() {
    this._productoService.getProductos().subscribe(result => {
        this.usuarios = result.data;
      },
      error =>{
        console.log(<any>error);
      }
      );
  }

}
