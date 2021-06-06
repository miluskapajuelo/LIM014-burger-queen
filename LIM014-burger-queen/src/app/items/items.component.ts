import { Component, OnInit } from '@angular/core';
import { Item} from '../model/item'


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})
export class ItemsComponent implements OnInit {
  items: Item[] = []
  total: number = 0


  constructor() { }

  ngOnInit(): void {
    this.items = [{
      id: 0,
      title: "drink",
      type: 'drink',
      price: 10.5,
      quantity: 4,
      completed: false
    },
    {
      id: 1,
      title: "pan",
      type: 'burger',
      price: 10.5,
      quantity: 4,
      completed: true
    },
    {
      id: 2,
      title: "drink",
      type: 'drink',
      price: 10.5,
      quantity: 4,
      completed: true
    },
    {
      id: 3,
      title: "pan",
      type: 'burger',
      price: 10.5,
      quantity: 4,
      completed: true
    }
  ]
  this.getTotal()
  }

  deleteItem(item:Item){
    this.items = this.items.filter(x=>x.id !== item.id ) //filtro todos los que no se han seleccionado
    this.getTotal()
  }

  onTypeItem(item:Item){
    this.items = this.items.filter(x =>item.type === x.type )
  }

  toggleItem(item:Item){
    this.getTotal()
  }


  getTotal(){
    this.total = this.items
    .filter(item => !item .completed)
    .map(item => item.quantity*item.price)
    .reduce((acc, item)=>acc+= item, 0)
  }
}
