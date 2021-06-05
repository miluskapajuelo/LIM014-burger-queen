import { NgModule } from '@angular/core';
//lo agregamos para crear las navegaciones de vistas sin refrescar la página
import {RouterModule, Route} from '@angular/router'
import { AboutComponent } from './about/about.component'
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';

const routes:Route[] = [
  {path: '', component: HolaMundoComponent},
  {path: 'about', component: AboutComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
