import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.sass']
})
export class HolaMundoComponent implements OnInit {
  title = 'my first app'

  ngOnInit(): void {
  }

}
