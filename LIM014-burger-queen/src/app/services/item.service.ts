import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../model/item';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url:string = 'http://localhost:3200/products'

  items:Item[] = [{
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
];

  constructor( private http: HttpClient) { }

  getItems():Observable<Item[]>{
    return this.http.get<Item[]>(this.url)
  }

  addItem(item: Item){
    this.items.unshift(item);
  }
}

