import { Inject, Injectable } from '@angular/core';
import { Dish } from '../Shared/dish';
import {Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http:HttpClient,@Inject('BaseURL') private baseURL: string) { }

  public getDishes(): Observable<Dish[]> {

    return this.http.get<Dish[]>(this.baseURL + 'dishes');;
  }

  public getDish(id: string): Observable<Dish> {
    return this.http.get<Dish>(this.baseURL+'dishes/'+id)
  }

  public getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(this.baseURL+'dishes?featured=true').pipe(map(dishes=>dishes[0]));
  }
  getDishIds(): Observable<string[] | any> {
    return this.getDishes().pipe(map(dishes=>dishes.map(f=>f.id)));
  }
}
