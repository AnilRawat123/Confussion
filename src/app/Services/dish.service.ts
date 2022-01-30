import { Inject, Injectable } from '@angular/core';
import { Dish } from '../Shared/dish';
import {Observable, of} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http:HttpClient,
    @Inject('BaseURL') private baseURL:string ,
   private processHTTPMsgService:ProcessHTTPMsgService
    ) { }

  public getDishes(): Observable<Dish[]> {

    return this.http.get<Dish[]>(this.baseURL + 'dishes').pipe(catchError(this.processHTTPMsgService.handleError));
  }

  public getDish(id: string): Observable<Dish> {
    return this.http.get<Dish>(this.baseURL+'dishes/'+id).pipe(catchError(this.processHTTPMsgService.handleError));
  }

  public getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(this.baseURL+'dishes?featured=true').pipe(map(dishes=>dishes[0])).pipe(catchError(this.processHTTPMsgService.handleError));
  }
  getDishIds(): Observable<string[] | any> {
    return this.getDishes().pipe(map(dishes=>dishes.map(f=>f.id))).pipe(catchError(this.processHTTPMsgService.handleError));;
  }

  putDish(dish:any): Observable<Dish> {
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Dish>(this.baseURL + 'dishes/' + dish?.id, dish, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }
  
}
