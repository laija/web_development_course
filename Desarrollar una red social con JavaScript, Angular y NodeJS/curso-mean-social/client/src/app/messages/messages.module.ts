// Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MomentModule } from '../../../node_modules/angular2-moment';
//Rutas
import { MessagesRoutingModule } from './messages-routing.module';


// Components 
import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { ReceivedComponent } from './received/received.component';
import { SentComponent } from './sent/sent.component';

// Servicios 
import { UserGuard } from '../services/user.guard';
import { UserService } from '../services/user.service';

@NgModule({
  declarations: [MainComponent, AddComponent, ReceivedComponent, SentComponent], 
  imports: [CommonModule, FormsModule, MessagesRoutingModule,MomentModule],
  exports: [MainComponent, AddComponent, ReceivedComponent, SentComponent],
  providers: [UserGuard, UserGuard]
})

export class MessagesModule { }

