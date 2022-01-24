import { Component, OnInit } from '@angular/core';
import {Dish} from '../Shared/dish';
import {DISHES} from '../Shared/dishes'
import { DishService } from '../Services/dish.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes!:Dish[];
  constructor(private dishService:DishService) 
  {
   }
  selectedDish!:Dish;
  ngOnInit(): void 
  {
    this.dishService.getDishes().then(res=> this.dishes=res);
  }

  onSelect(dish:Dish)
  {
    debugger;
    this.selectedDish=dish;
  }
}
