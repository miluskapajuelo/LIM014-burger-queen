import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from './post';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataserviceURL= 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) {

  }
  getData(): Observable<Post[]>{
    return this.http.get<Post[]>(this.dataserviceURL)

  }
    }

