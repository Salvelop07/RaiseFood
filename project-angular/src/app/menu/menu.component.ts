import { DishService } from './../services/dish.service';
import { Component, OnInit } from '@angular/core';
import { Dish } from '../beans/dish';
import { TicketLine } from '../beans/ticketline';
import { forEach } from '@angular/router/src/utils/collection';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  admin: boolean = false;
  basic: boolean = false;
  ticketLines: TicketLine[] = [];
  cartArr: TicketLine[] = [];
  dishes: Dish[] = [];
  dishId: number = null;
  dishName: string = '';
  dishDesc: string = '';
  dishPrice: number = 0;

  constructor(
    private dishService: DishService,
    private loginService: LoginService
  ) {
  }

  ngOnInit() {
    this.loginService.isLoggedIn().subscribe((loggedIn) => {
      if (loggedIn) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser.role == 2) {
          this.admin = true;
        }
      }
    });
    this.getAllDishes();
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
    this.dishName = "";
    this.dishPrice = 0;
    this.dishDesc = "";
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
