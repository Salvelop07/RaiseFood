import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dish } from '../beans/dish';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl: string = `${environment.apiUrl}/dish`;
@Injectable()
export class DishService {

  constructor(private http: HttpClient) { }
  getAllDishById(dishId: number) {
    return this.http.get<Dish[]>(`${apiUrl}/${dishId}`);
  }
  getAllDishes() {
    return this.http.get<Dish[]>(apiUrl);
  }
  addDish(dish: Dish){

    return
  }
}
