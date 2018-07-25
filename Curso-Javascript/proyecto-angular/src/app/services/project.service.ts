
//modulos necesarios para crear un servicio injectable  
import{	Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'; // para poder hacer peticiones ajax 
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/project';
import { Global } from './global';


// este va a ser un servicio que estamos inyectando 
// servicio definido y creado  
@Injectable()
export class ProjectService{

	public url:string;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}
	testService(){
		return 'Probando el servicio de Angular';
	}

	saveProject(project:Project): Observable<any>{	// pasamos un parametro project que es el projecto que le vamos a pasar y es un objeto de tipo projecto y va a regresar un observable de cualquer tipo 
		let params = JSON.stringify(project); // aqui necesitamos que los datos que se recogen mediante el formulario sean un JSON para que los recoga la API 
		let header  = new HttpHeaders().set('Content-Type','application/json'); // pra que la informacion viaje en tipo JSON 
		return this._http.post(this.url+'/saveProject', params, {headers: header});
	}

	getProjects(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'/projects', {headers: headers});
	}

	getProject(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.get(this.url+'/project/'+id, {headers: headers});		
	}

	deleteProject(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.delete(this.url+'/project/'+id, {headers: headers});		
	}

	updateProjec(project): Observable<any>{
		let params = JSON.stringify(project);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.put(this.url+'/project/' + project._id ,params,{headers: headers} );
	}

}