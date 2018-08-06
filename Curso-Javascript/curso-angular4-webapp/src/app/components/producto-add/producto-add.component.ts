import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Usuario } from '../../models/producto';

@Component({
  selector: 'crear-producto',
  templateUrl: './producto-add.component.html',
  styleUrls: ['./producto-add.component.css'],
  providers: [ ProductoService]
})
export class ProductoAddComponent implements OnInit {
	public titulo: string;
	public usuario: Usuario;
  constructor(
    private _productoService: ProductoService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { 
  	this.titulo = 'Crear un Nuevo Producto';
  	this.usuario = new Usuario('','');
  }

  ngOnInit() {
  	console.log("Producto-addcomponent.ts cargando");
  }

  onSubmit(){
  	console.log(this.usuario);
    this._productoService.addProducto(this.usuario).subscribe(
      response => {
        this._router.navigate(['/productos']);
      },
      error =>{
        console.log(<any>error)
      }
      );
  }

}