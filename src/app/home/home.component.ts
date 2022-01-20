import { Component, OnInit } from '@angular/core';

import { PromotionService } from '../Services/promotion.service';
import { Promotion } from '../Models/Promotion';
import { DishService } from '../Services/dish.service';
import { Dish } from '../Shared/dish';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private Promotionservice:PromotionService,
    private dishservice:DishService) { }


    dish!:Dish;
    promotion!:Promotion;
  ngOnInit(): void 
  {
    debugger;
this.dish=this.dishservice.getFeaturedDish();
this.promotion=this.Promotionservice.getFeaturedpromotion();


  }

}
