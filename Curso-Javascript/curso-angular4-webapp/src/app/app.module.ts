import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Router 
import { appRoutingProviders, routing } from './app-routing';

// componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoAddComponent } from './components/producto-add/producto-add.component';
import { ProductoDetailComponent } from './components/producto-detail/producto-detail.component';
import { ProductoUpdateComponent } from './components/producto-update/producto-update.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductosComponent,
    ProductoAddComponent,
    ProductoDetailComponent,
    ProductoUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    appRoutingProviders,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
