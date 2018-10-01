import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes 
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UsersComponent } from './components/users/users.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'login', component: LoginComponent},
	{path: 'registro', component: RegisterComponent},
	{path: 'home', component: HomeComponent},
	{path: 'myprofile', component: UserEditComponent},
	{path: 'people', component: UsersComponent},
	{path: 'people/:page', component: UsersComponent},
	{path: '**', component: HomeComponent}, 
];

export const appRoutingProviders: any[] = [] ;
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);