import { Component, OnInit } from '@angular/core';
import { Itemcito} from '../../model/Itemcito'

@Component({
  selector: 'app-itemcitos',
  templateUrl: './itemcitos.component.html',
  styleUrls: ['./itemcitos.component.sass']
})
export class ItemcitosComponent implements OnInit {

  itemcitos: Itemcito[] = []
  itemcitosCtalogo: string[] = []

  constructor() { }

  ngOnInit(): void {
    this.itemcitosCtalogo=['burger','drink',"extra dish"]

    this.itemcitos = [{
      _id:  1,
      name:"Ham and-cheese sandwich",
      price: 14,
      image: "Ham-and-cheese-sandwich.jpg",
      type: "burger",
      dateEntry: "02-01-2020"
    },
    {
      _id:  2,
      name:"Simple burger",
      price: 16,
      image: "Simple-burger.jpg",
      type: "burger",
      dateEntry: "02-01-2020"
    },
    {
      _id:  3,
      name:"American coffee",
      price: 16,
      image: "American-coffee.jpg",
      type: "drink",
      dateEntry: "02-01-2020"
    }
  ]
  }

  deleteItemcito(itemcito:Itemcito){
    this.itemcitos = this.itemcitos.filter(x => x._id !== itemcito._id)
  }



}
