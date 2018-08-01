import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Usuario } from '../../models/producto';

@Component({
  selector: 'app-producto-update',
  templateUrl: './producto-update.component.html',
  styleUrls: ['./producto-update.component.css']
})
export class ProductoUpdateComponent implements OnInit {
  public titulo: string;
  public usuario: Usuario; 

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService: ProductoService,
  	) {
//  		this.titulo="producto updated cargado ";
  	 }

  ngOnInit() {
  	this.getUsuario
  }

    getUsuario(){
    this._route.params.forEach((params: Params) =>{
      let id = params['id'];
      this._productoService.getUsuario(id).subscribe(result => {
        this.usuario = result.data;
        console.log( this.usuario);
      },
      error =>{
        console.log(<any>error);
      });
    }
  }

}
