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
}
