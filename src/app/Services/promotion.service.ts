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

  getpromotion(id:string):Promotion{
    return Promotions.filter((promo)=>{promo.id==id})[0];
  }

  getFeaturedpromotion():Promotion{
    return Promotions.filter(g=>g.featured)[0];
  }
}
