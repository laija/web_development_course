import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Message } from '../../models/message';
import { User } from '../../models/user';
import { MessageService } from "../../services/message.service";
import { UserService } from "../../services/user.service";
import { Follow } from '../../models/follow';
import { FollowService } from '../../services/follow.service';
import { GLOBAL } from '../../services/global';


@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css'],
  providers: [ FollowService, MessageService ]  
})
export class SentComponent implements OnInit {
  public title: string;
  public message: Message;
  public identity;
  public token;
  public url: string;
  public status: string;
  public follows;
  public messages: Message[];
  public pages;
  public page;
  public total;
  public next_page;
  public prev_page;
  public userPageId;

  constructor(
    private _route: ActivatedRoute, 
    private _router: Router,
    private _followService: FollowService,
    private _messageService: MessageService,
    private _userService: UserService
  ) {
      this.title = 'Enviar mensaje';
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.url = GLOBAL.url;
      this.message = new Message('', '', '', '', this.identity._id, '');
  }

  ngOnInit() {
    this.actualPage();
  }

  gerMessages(token, page){
    this._messageService.getEmmitMessages(this.token, page).subscribe(
      response =>{
        if(!response.messages){
          console.log();
        }else{
          this.messages = response.messages;
          this.total = response.total;
          this.pages = response.pages;
        }
      },
        error => {
          console.log(<any>error);
      }
    );
  }

  actualPage(){
    this._route.params.subscribe(params => {
      let page =  +params.page; // convirtiendo en entero 
      this.page = page;
      
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

      this.gerMessages(this.token, this.page);
    });
  }
}
