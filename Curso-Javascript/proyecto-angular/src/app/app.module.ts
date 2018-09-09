import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // module to use the Data binding 
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailComponent } from './components/detail/detail.component';
import { ErrorComponent } from './components/error/error.component';
import { EditComponent } from './components/edit/edit.component';
import { TestingComponent } from './components/testing/testing.component';


// Para que la aplicacion identifique un componente y pueda ser utilizado en las platillas de los otros componentes, el componente en cuestion tiene que se agregado en el array de declarations 
@NgModule({
  declarations: [ // nos permite crear directivas, pipes y componentes, bien declararlos, para poder utilizarlos de forma global
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent,
    TestingComponent
  ],
  imports: [ // nos permite cargar differentes modulos del framework o que agamos nosotros, funcionalidades o servicio, y que funcionen en la applicacion 
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [ // ciertos servicios y configuraciones se cargan aqui
    appRoutingProviders
  ],
  bootstrap: [AppComponent] // el componente principal con el que la applicacion se va a lanzar o con el que este modulo va a lanzarce 
})
export class AppModule { }
