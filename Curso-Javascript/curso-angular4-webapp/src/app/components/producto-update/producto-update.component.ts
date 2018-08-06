import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Usuarios } from '../../models/producto';

@Component({
  selector: 'app-producto-update',
  templateUrl: './producto-update.component.html',
  styleUrls: ['./producto-update.component.css']
})
export class ProductoUpdateComponent implements OnInit {
  public titulo: string;
  public usuario: Usuarios;
  public is_edit; 

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService: ProductoService,
  	) {
  		this.usuario= new Usuarios(1,"","","");
  		this.titulo="Editar usuario";
  		this.is_edit= true;
  	 }

  ngOnInit() {
  	this.getUsuario();
  }

  getUsuario(){
    this._route.params.forEach((params: Params) =>{
      let id = params['id'];
      this._productoService.getUsuario(id).subscribe(result =>  {
        this.usuario = result.data;
        console.log(result);
      },
      error =>{
        console.log(<any>error);
      });
    })
  }
}
