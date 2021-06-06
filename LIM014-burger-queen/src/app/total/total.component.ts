import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.sass']
})
export class TotalComponent implements OnInit {

  //definir propiedades qué quiero que muestre

  @Input() total:number = 2;
  @Input()  mensaje:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
