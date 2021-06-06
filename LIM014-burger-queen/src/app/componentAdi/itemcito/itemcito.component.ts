import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Itemcito } from '../../model/Itemcito';

@Component({
  selector: 'app-itemcito',
  templateUrl: './itemcito.component.html',
  styleUrls: ['./itemcito.component.sass']
})
export class ItemcitoComponent implements OnInit {

  @Input() itemcito:Itemcito = new Itemcito;
  @Input() itemcitoCtalo = new Itemcito;
  @Output() deleteItemcito: EventEmitter<Itemcito> = new EventEmitter
  @Output() showItemcito: EventEmitter<Itemcito> = new EventEmitter


  constructor() { }

  ngOnInit(): void {
  }


  onShow(itemcitoCtalo:Itemcito){
    this.showItemcito.emit(itemcitoCtalo)
  }
  onDelete(itemcito:Itemcito){
    this.deleteItemcito.emit(itemcito)
  }
}
