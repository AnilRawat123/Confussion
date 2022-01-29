import { Injectable,Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { Promotion } from '../Models/Promotion';
import { Promotions } from '../Shared/promotions';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http:HttpClient, @Inject('BaseURL') private baseURL: string) { }

  getpromotions():Observable<Promotion[]>{
    return this.http.get<Promotion[]>(this.baseURL+'Promotions');
  }

  getpromotion(id:string):Observable<Promotion>{
    return this.http.get<Promotion>(this.baseURL+'Promotions/'+id);
  }

  getFeaturedpromotion():Observable<Promotion>{
    return  this.http.get<Promotion[]>(this.baseURL+'Promotions?featured=true').pipe(map(Promotions=>Promotions[0]));
  }
}
