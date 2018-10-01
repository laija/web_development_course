import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { GLOBAL } from  '../../services/global';

// los providers sob los servicios 
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
	public title: string;
	public identity;
	public token;
  public page;
  public next_page;
  public prev_page;
  public status;
  public total;
  public pages;
  public users: User[];


  constructor(
  		private _route: ActivatedRoute,
  		private _router: Router,
  		private _userService: UserService
  	) {
  	this.title = 'Pople';
  	this.identity = this._userService.getIdentity();
  	this.token = this._userService.getToken();

  }

  ngOnInit() {
  	console.log('users.component ha sido cargado');
    this.actualPage();
  }


  actualPage(){
    this._route.params.subscribe(params => {
      let page =  +params.page; // convirtiendo en entero 
      this.page = page;
      if(!page){
        page = 1;
      }else{
        this.next_page = page + 1;
        this.prev_page = page - 1;

        if(this.prev_page <= 0){
          this.prev_page = 1;
        }
      }

      // give list of users 
      this.getUsesr(page);
    });
  }

  getUsesr(page){
    this._userService.getUsers(page).subscribe(
      response =>{
        if(!response.usuarios){
          this.status = 'error' ;
          //console.log(response.usuarios);
        }else{
          this.total = response.total;
          this.users = response.users;
          this.pages = response.pages;
          if(page > this.pages){
            this._router.navigate(['/gente', 1]);
          }
        }
      },
      error =>{
        var errorMessage = <any>error;
        console.log(errorMessage);

        if(errorMessage != null){
          this.status = 'error';
        }
      }
    );
  }

}
