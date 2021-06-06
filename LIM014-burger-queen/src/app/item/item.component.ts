import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../model/item'
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  @Input()item:Item = new Item();
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter() //carga un tipo de dato, evento se activa y va a tener en su dfinición
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter()
  @Output() onTypeItem: EventEmitter<Item> = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  onDelete(item:Item){
    this.deleteItem.emit(item)
  }
  onTogle(item:Item){
    item.completed = ! item.completed
    this.toggleItem.emit(item)
  }
  onType(item:Item){
    this.onTypeItem.emit(item)
  }

}
