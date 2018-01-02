import { DishService } from './../services/dish.service';
import { Component, OnInit } from '@angular/core';
import { Dish } from '../beans/dish';
import { TicketLine } from '../beans/ticketline';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  ticketLines: TicketLine[] = [];

  dishes: Dish[] = [];
  
  constructor(private dishService: DishService) {
    this.getAllDishes();
  }

  ngOnInit() {

  }

  add(ticketLine){
    if(ticketLine.quantity < 5){
      ticketLine.quantity++; 
    }
  }

  remove(ticketLine){
    if(ticketLine.quantity > 0){ 
      ticketLine.quantity--;
    }
  }

  getAllDishes(){
    this.dishService.getAllDishes().subscribe(data => {
      this.dishes = data;
      for(let ticketArr of this.dishes){
        let ticketline: TicketLine={ticketLineId:null,ticket:null,dish:ticketArr,quantity:0};
        this.ticketLines.push(ticketline);
      }
    });
  }

}
