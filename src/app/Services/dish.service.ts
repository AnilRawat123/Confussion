import { Injectable } from '@angular/core';
import { Dish } from '../Shared/dish';
import { DISHES } from '../Shared/dishes';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  public getDishes(): Promise<Dish[]> {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(DISHES);
      }, 3000);
    });
    //return  Promise.resolve(DISHES);
  }

  public getDish(id: string): Promise<Dish> {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(DISHES.filter(dish => dish.id == id)[0]);
      }, 2000);
    });
    // return  Promise.resolve(DISHES.filter(dish=>dish.id==id)[0]);;
  }

  public getFeaturedDish(): Promise<Dish> {
    return new Promise((resolve,reject) => {
      setTimeout(() => 
      {
        resolve(DISHES.filter(g => g.feature)[0]);
      }, 2000);

    });
    //return Promise.resolve(DISHES.filter(g=>g.feature)[0]);
  }
}
