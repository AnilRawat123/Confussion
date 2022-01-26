import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Promotion } from '../Models/Promotion';
import { Promotions } from '../Shared/promotions';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getpromotions():Promotion[]{
    return Promotions;
  }

  getpromotion(id:string):Observable<Promotion>{
    return of(Promotions.filter((promo)=>{promo.id==id})[0]).pipe(delay(300));
  }

  getFeaturedpromotion():Observable<Promotion>{
    return  of(Promotions.filter(g=>g.featured)[0]).pipe(delay(200));
  }
}
