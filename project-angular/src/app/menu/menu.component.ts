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
  basic: boolean = false;
  ticketLines: TicketLine[] = [];
  cartArr: TicketLine[] = [];
  dishes: Dish[] = [];
  dishId: number = null;
  dishName: string = '';
  dishDesc: string = '';
  dishPrice: number = 0;

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
  
  addItem(){
    let aDish: Dish = {
      id: this.dishId,
      name: this.dishName,
      price: this.dishPrice,
      description: this.dishDesc
    } 
    console.log(aDish);
    this.dishService.addADish(aDish).subscribe(() => this.getAllDishes());
    console.log("after add dish service.")
  }

  addToCart(ticketLine){
    if(!this.cartArr.includes(ticketLine)){
      console.log("inside addtocart check");
      console.log(ticketLine);
      this.cartArr.push(ticketLine);
      localStorage.setItem("shoppingCart", JSON.stringify(this.cartArr));
    }
    
  }

  getAllDishes(){
    this.dishService.getAllDishes().subscribe(data => {
      this.ticketLines = [];
      this.dishes = data;
      for(let ticketArr of this.dishes){
        let ticketline: TicketLine={ticketLineId:null,ticket:null,dish:ticketArr,quantity:0};
        this.ticketLines.push(ticketline);
      }
    });
  }

}
