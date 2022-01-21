import { Component, OnInit } from '@angular/core';

import { PromotionService } from '../Services/promotion.service';
import { Promotion } from '../Models/Promotion';
import { DishService } from '../Services/dish.service';
import { Dish } from '../Shared/dish';

import { CorporateLeader } from '../Models/CorporateLeader';
import { CorporateLeaderService } from '../Services/corporate-leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private Promotionservice:PromotionService,
    private dishservice:DishService,private corporateleaderService:CorporateLeaderService) { }


    dish!:Dish;
    promotion!:Promotion;
    CorporateLeader!:CorporateLeader;
  ngOnInit(): void 
  {
    debugger;
this.dish=this.dishservice.getFeaturedDish();
this.promotion=this.Promotionservice.getFeaturedpromotion();
this.CorporateLeader=this.corporateleaderService.getFeaturedCorporateLeader();

  }

}
