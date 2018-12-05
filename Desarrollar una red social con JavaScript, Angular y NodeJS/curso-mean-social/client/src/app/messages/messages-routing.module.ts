import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { ReceivedComponent } from './received/received.component';
import { SentComponent } from './sent/sent.component';

import { UserGuard } from '../services/user.guard';
import { UserService } from '../services/user.service';


const messagesRoutes: Routes  =[
	{
		path: 'messages',
		component: MainComponent, 
		children: [
		{ path: '', redirectTo: 'recieved', pathMatch: 'full'},
		{ path: 'send', component: AddComponent, canActivate:[UserGuard]},
		{ path: 'recieved', component: ReceivedComponent, canActivate:[UserGuard]},
		{ path: 'recieved/:', component: ReceivedComponent, canActivate:[UserGuard]},
		{ path: 'sent', component: SentComponent, canActivate:[UserGuard]},
		{ path: 'sent/:page', component: SentComponent, canActivate:[UserGuard]}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(messagesRoutes)
	],
	exports: [
		RouterModule
	]
})
export class MessagesRoutingModule{}