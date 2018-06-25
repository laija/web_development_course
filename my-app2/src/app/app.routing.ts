// importar modulos del router de angular 
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

// Importar componentes 
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideoJuegoComponent } from './videoJuegos/videojuego.component';

// Array de rutas
const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'zapatillas', component: ZapatillasComponent},
	{path: 'videojuego', component: VideoJuegoComponent},
	{path: 'videojuego/:nombre', component: VideoJuegoComponent},
	{path: 'videojuego/:nombre/:followers', component: VideoJuegoComponent},
	{path: '**', component: HomeComponent}
];


// Exportar el modulo del router 
export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);