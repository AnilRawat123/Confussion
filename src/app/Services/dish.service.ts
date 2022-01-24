import { Injectable } from '@angular/core';
import { Dish } from '../Shared/dish';
import { DISHES } from '../Shared/dishes';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

 public getDishes():Promise<Dish[]>
  {
    return  Promise.resolve(DISHES);
  }

  public getDish(id:string):Promise<Dish>
  {
  return  Promise.resolve(DISHES.filter(dish=>dish.id==id)[0]);;
  }

  public getFeaturedDish():Promise<Dish>
  {
return Promise.resolve(DISHES.filter(g=>g.feature)[0]);
  }
}
