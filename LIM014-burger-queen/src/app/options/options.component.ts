import { Component, OnInit, Input } from '@angular/core';
import {Item} from '../model/item';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.sass']
})
export class OptionsComponent implements OnInit {

  @Input() totalProduct:Item[]=[]
  @Input()  mensaje:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
