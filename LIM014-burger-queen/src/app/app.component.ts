import { Component } from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name: string = "marc";
  age:number = 28;
  users:string[] = ['cameron', 'marc', 'thalia'];
  posts = [] as  any;

  constructor(private dataService:DataService){
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    })
  }

  addUser(newUser){
    this.users.push(newUser.value);
    newUser.focus();
    newUser.value = '';
    return false //cancela el evento de resetear la página
  }
  deleteUser(user: string){
    let index = this.users.indexOf(user);
    this.users.splice(index, 1)
  }

}
