import { Component, OnInit } from '@angular/core';
import { Project } from  '../../models/project'; // import modelo, el objeto en base al que estan los objeos en mi mongo db 
import { ProjectService } from  '../../services/project.service'; // importar el servicio 
import { UploadService }  from  '../../services/updeload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
  public title: string;// titulo de la seccion 
  public project: Project;
  public save_project;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
  	private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
  	this.title = "Crear proyecto";
  	this.project = new Project('','','',2019,'','');
  }

  ngOnInit() {
  	console.log(this.project)
  }

  onSubmit(form){
    //Guardar los datos 
    this._projectService.saveProject(this.project).subscribe(
        response =>{
          if(response.project){
            //Subir la imagen 
            this._uploadService.makeFileRequest(Global.url+"/upload-image/"+response.project._id,[],this.filesToUpload, 'image').then((result:any) => {
              this.save_project = result.project;
              this.status = 'success';
              form.reset();
            });
          }
        },
        error =>{
           this.status = 'failed';
        }
      );
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}


/*NG is a module that contains a lot of components */