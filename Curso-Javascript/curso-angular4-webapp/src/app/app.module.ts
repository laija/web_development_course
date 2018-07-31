import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Router 
import { appRoutingProviders, routing } from './app-routing';

// componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoAddComponent } from './components/producto-add/producto-add.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductosComponent,
    ProductoAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    appRoutingProviders,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
