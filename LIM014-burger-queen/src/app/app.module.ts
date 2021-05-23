import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//nos conectamos para poder hacer actualizaciones a tiempo real desde un formulario
import {FormsModule} from '@angular/forms';
//lo agregamos para conectarnos con una página exterior y traernos los datos
import { HttpClientModule} from '@angular/common/http'
//lo agregamos para crear las navegaciones de vistas sin refrescar la página
import {RouterModule, Route} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';

import {DataService} from './data.service';
import { AboutComponent } from './about/about.component'

const routes:Route[] = [
  {path: '', component: HolaMundoComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
