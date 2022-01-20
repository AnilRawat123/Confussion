import { Injectable } from '@angular/core';
import { Dish } from '../Shared/dish';
import { DISHES } from '../Shared/dishes';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

 public getDishes():Dish[]
  {
    return DISHES;
  }

  public getDish(id:string):Dish
  {
  //  return DISHES.filter(g=>g.id==id)[0];
  return DISHES.filter(dish=>dish.id==id)[0];
  }

  public getFeaturedDish():Dish
  {
    debugger;
return DISHES.filter(g=>g.feature)[0];
  }
}
