import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../model/item';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {


  private domain: string;
  private endpoint: string;
  httpOptions = {
    headers: {
      'content-type': 'application/json'
    }
  }

  constructor(private http: HttpClient) {
    this.domain = environment.domain;
    this.endpoint = '/products';
  }

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



  getItems():Observable<Item[]>{
    return this.http.get<Item[]>(`${this.domain}${this.endpoint}`)
  }

  //Otros métodos HTTP
  addItem(item: Item):Observable<Item>{
    return this.http.post<Item>(`${this.domain}${this.endpoint}`, item, this.httpOptions)
     //this.items.unshift(item);
  }
  toggleItem(item: Item):Observable<Item>{
    return this.http.put<Item>(`${this.domain}${this.endpoint}${item.id}`, item, this.httpOptions)
  }
  deleteItem(item: Item):Observable<Item>{
    return this.http.delete<Item>(`${this.domain}${this.endpoint}${item.id}`)
  }
}

