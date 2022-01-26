import { Injectable } from '@angular/core';
import { Dish } from '../Shared/dish';
import { DISHES } from '../Shared/dishes';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  public getDishes(): Observable<Dish[]> {

    return of(DISHES).pipe(delay(2000));
  }

  public getDish(id: string): Observable<Dish> {
    return of(DISHES.filter(dish => dish.id == id)[0]).pipe(delay(2000));
  }

  public getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter(g => g.feature)[0]).pipe(delay(2000));
  }
  getDishIds(): Observable<string[] | any> {
    return of(DISHES.map(dish => dish.id));
  }
}
