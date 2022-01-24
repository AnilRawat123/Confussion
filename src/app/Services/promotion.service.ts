import { Injectable } from '@angular/core';

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

  getpromotion(id:string):Promise<Promotion>{
    return new Promise((resolve,reject)=>{
setTimeout(() => {
  resolve(Promotions.filter((promo)=>{promo.id==id})[0]);
}, 2000);

    });
  }

  getFeaturedpromotion():Promise<Promotion>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(Promotions.filter(g=>g.featured)[0])
      }, 2000);
    });
  }
}
