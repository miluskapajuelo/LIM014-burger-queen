import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item'
import { ItemService } from '../services/item.service'


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})
export class ItemsComponent implements OnInit {

  total: number = 0
  items:Item[]=[]


  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
  //this.items = this.itemService.getItems()
  this.itemService.getItems().subscribe(data =>{
    this.items = data
    //this.getTotal()
   })
  this.getTotal()
  }

  deleteItem(item:Item){
    this.items = this.items.filter(x=>x.id !== item.id ) //filtro todos los que no se han seleccionado
    //this.itemService.deleteItem(item).subscribe()
    this.getTotal()
  }

  onTypeItem(item:Item){
    this.items = this.items.filter(x =>item.type === x.type )
  }

  toggleItem(item:Item){
    //this.itemService.toggleItem(item).subscribe()
    this.getTotal()
  }


  getTotal(){
    this.total = this.items
    .filter(item => !item .completed)
    .map(item => item.quantity*item.price)
    .reduce((acc, item)=>acc+= item, 0)
  }
}
