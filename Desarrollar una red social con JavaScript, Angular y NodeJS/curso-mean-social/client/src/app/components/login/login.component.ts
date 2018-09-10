import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
	public title: string;
  public user: User;
  public status: string;
  public identity;
  public token;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router, 
    private _userService: UserService
    ) { 
  	this.title = 'LogIn';
    this.user= new User("","","","","","","","");
  }

  ngOnInit() {
  	console.log('Componente de login cargado');
  }

  onSubmit(){
    // logueaer el usuario y conseguir sus datos 
    this._userService.signup(this.user).subscribe(
      response => {
        this.identity = response.user;
        if(!this.identity || !this.identity._id){
          this.status = 'error';
        }else{
          this.status = 'success';
          //Persistir datos del usuario 
          console.log('algp');
          //get token
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
