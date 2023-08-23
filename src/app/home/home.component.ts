import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string =''
  backcolor: string = 'lightgray';
  shape: number[]=[50, 0, 
                  80, 10, 
                  100, 35, 
                  100, 70, 
                  80, 90, 
                  50, 100, 
                  20, 90, 
                  0, 70, 
                  0, 35, 
                  20, 10]
  
  constructor() { }

  ngOnInit(): void {
  }

  enterName(){
    let nombre= prompt('Ingresa tu nombre');
    console.log(nombre);
    this.name = nombre || '';

  }
}
