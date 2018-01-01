import { DishService } from './../services/dish.service';
import { Component, OnInit } from '@angular/core';
import { Dish } from '../beans/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  quantity: number = 0;
  dishes: Dish[] = [];
  
  constructor(private dishService: DishService) {
    this.dishService.getAllDishes
  }

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

  getAllDishes(){
    this.dishService.getAllDishes().subscribe(data => {
      this.dishes = data;
    });
  }
}
