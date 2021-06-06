import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//nos conectamos para poder hacer actualizaciones a tiempo real desde un formulario
import {FormsModule} from '@angular/forms';
//lo agregamos para conectarnos con una página exterior y traernos los datos
import { HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { ItemsComponent } from './items/items.component';

import {DataService} from './data.service';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';
import { ItemcitoComponent } from './itemcito/itemcito.component';
import { ItemcitosComponent } from './itemcitos/itemcitos.component'



@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    ItemsComponent,
    AboutComponent,
    HeaderComponent,
    ItemComponent,
    ItemcitoComponent,
    ItemcitosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
      ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
