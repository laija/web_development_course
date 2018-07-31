import { Component, OnInit } from '@angular/core';
import { Project } from  '../../models/project'; // import modelo, el objeto en base al que estan los objeos en mi mongo db 
import { ProjectService } from  '../../services/project.service'; // importar el servicio 
import { UploadService }  from  '../../services/updeload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router'; // para recoger parametros o hacer redirecciones en la URL


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]  
}) 

export class EditComponent implements OnInit {

  public title: string;// titulo de la seccion 
  public project: Project;
  public save_project;
  public status: string;
  public filesToUpload: Array<File>;
  public url: string;

/*
En el constructor se cargan     private _router: Router, private _route: ActivatedRoute, to use   import { Router, ActivatedRoute, Params } from '@angular/router';   
*/
  constructor(
  	private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
  	this.title = "Crear proyecto";
  	this.url = Global.url
  }

  ngOnInit(){
    // aqui se obtiene  el id  del projecto 
    this._route.params.subscribe(params => {
      let id = params.id;
      // aqui se enviar como para metro a la funcion para objeterlo de la base de datos 
      this.getProject(id);
    });
  }

  getProject(id){
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  onSubmit(){
  	this._projectService.updateProjec(this.project).subscribe(
		response => {
  			if(response.project){
				
				// Subir la imagen
				if(this.filesToUpload){
					this._uploadService.makeFileRequest(Global.url+"/upload-image/"+response.project._id, [], this.filesToUpload, 'image')
					.then((result:any) => {
						this.save_project = result.project;
						this.status = 'success';
					});
				}else{
					this.save_project = response.project;
					this.status = 'success';
				}
				
			}else{
				this.status = 'failed';
			}
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
  }

	fileChangeEvent(fileInput: any){
		this.filesToUpload = <Array<File>>fileInput.target.files;
	}

}
