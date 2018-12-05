import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { Follow } from '../../models/follow';
import { UserService } from '../../services/user.service';
import { FollowService } from '../../services/follow.service';
import { GLOBAL } from '../../services/global';

// los providers sob los servicios 
@Component({
  selector: 'app-followed',
  templateUrl: './followed.component.html',
  styleUrls: ['./followed.component.css'],
  providers: [UserService,FollowService]
})
export class FollowedComponent implements OnInit {
  public title: string;
  public url: string;
  public identity;
  public token;
  public page;
  public next_page;
  public prev_page;
  public status;
  public total;
  public pages;
  public follows;
  public followed;
  public users: User[];
  public userPageId;


  constructor(
  		private _route: ActivatedRoute,
  		private _router: Router,
  		private _userService: UserService,
      private _followService: FollowService
  	) {
  	this.title = 'Followed users by';
    this.url = GLOBAL.url;
  	this.identity = this._userService.getIdentity();
  	this.token = this._userService.getToken();

  }

  ngOnInit() {
    this.actualPage();
  }


  actualPage(){
    this._route.params.subscribe(params => {
      let page =  +params.page; // convirtiendo en entero 
      let user_id = params['id'];
      this.page = page;
      this.userPageId = user_id;
      
      if(!params['page']){
        page = 1;
      }
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
      this.getUser(user_id, page);
    });
  }

  getFollows(user_id,page){
    this._followService.getFollowed(this.token, user_id, page).subscribe(
      response =>{
        this.userPageId = user_id;
        if(response.follows == ''){
          this.status = 'error' ;
        }else{
          this.total = response.total;
          this.followed = response.follows;
          this.pages = response.pages;
          this.follows = response.user_followed;
                    console.log(response);
        }
      },
      error =>{
        var errorMessage = <any>error;
        if(errorMessage != null){
          this.status = 'error';
        }
      }
    );

  }

  public followUserOver;
  mouseLeave(user_id){
    this.followUserOver = 0;
  }

  mouseEnter(user_id){
    this.followUserOver = user_id;
  }

  followUser(followed){
    var follow = new Follow('',this.identity._id,followed);
    this._followService.addFollow(this.token, follow).subscribe(
       response =>{
         if(!response.follow){
           this.status = 'error';
         }else{
           this.status = 'success';
           this.follows.push(followed);
         }
       },
       error =>{
         var errorMessage  = <any>error;
         if(errorMessage != null){
           this.status  = 'error';
         }
       });
  }

  unfollowUser(followed){
    console.log(followed)
    this._followService.deleteFollow(this.token,followed).subscribe(
      response =>{
        var search = this.follows.indexOf(followed);
        if(search != -1){
          this.follows.splice(search,1);
        }
      },
      error =>{
        var errorMessage  = <any>error;
        if(errorMessage != null){
          this.status  = 'error';
        }
      });
  }

  public user: User;
  getUser(user_id, page){
    this._userService.getUser(user_id).subscribe(
      response =>{
        if(response.user){
          this.user = response.user;
          this.getFollows(user_id, page);
        }else{
          this._router.navigate(['/home']);
        }
      }, error =>{
        var errorMessage  = <any>error;
        if(errorMessage != null){
          this.status  = 'error';
        }
      }
    );
  }

}
