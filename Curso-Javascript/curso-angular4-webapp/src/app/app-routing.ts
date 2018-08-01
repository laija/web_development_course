import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoAddComponent } from './components/producto-add/producto-add.component';
import { ProductoDetailComponent } from './components/producto-detail/producto-detail.component';
import { ProductoUpdateComponent } from './components/producto-update/producto-update.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'productos', component: ProductosComponent},	
	{path: 'crear-producto', component: ProductoAddComponent},
	{path: 'producto/:id', component: ProductoDetailComponent},	
	{path: 'editar-producto/:id', component: ProductoUpdateComponent},	
	{path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = []; // servicio del router 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 
// establcer la configuracion de las rutas que hemos configurado, este es un objetos de tipo ModuleWithProviders que nos regresa un metodo forRoot del RouterModule