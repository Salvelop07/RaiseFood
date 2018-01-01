import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  quantity: number = 0;

  constructor() { }

  ngOnInit() {
  }

  add(){
    if(this.quantity < 5){
      this.quantity++; 
    }
  }

  remove(){
    if(this.quantity > 0){ 
    this.quantity--;
    }
  }
}
