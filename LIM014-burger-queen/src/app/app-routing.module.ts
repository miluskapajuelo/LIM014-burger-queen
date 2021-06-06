import { NgModule } from '@angular/core';
//lo agregamos para crear las navegaciones de vistas sin refrescar la página
import {RouterModule, Route} from '@angular/router'
import { AddItemComponent } from './add-item/add-item.component';
import {ItemsComponent} from './items/items.component';

const routes:Route[] = [
  {
    path: '',
    component: ItemsComponent
  },
  {
    path: 'Add',
    component: AddItemComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
