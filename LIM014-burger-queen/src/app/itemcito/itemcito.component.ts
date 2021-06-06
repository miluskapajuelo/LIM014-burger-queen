import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Itemcito } from '../model/Itemcito';

@Component({
  selector: 'app-itemcito',
  templateUrl: './itemcito.component.html',
  styleUrls: ['./itemcito.component.sass']
})
export class ItemcitoComponent implements OnInit {

  @Input() itemcito:Itemcito = new Itemcito;
  @Output() deleteItemcito: EventEmitter<Itemcito> = new EventEmitter


  constructor() { }

  ngOnInit(): void {
  }

  onDelete(itemcito:Itemcito){
    this.deleteItemcito.emit(itemcito)
  }
}
