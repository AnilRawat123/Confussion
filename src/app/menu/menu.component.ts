import { Component, OnInit,Inject } from '@angular/core';
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
  Error!:string;
  constructor(private dishService:DishService,@Inject('BaseURL') public baseURL: string) 
  {
   }
  selectedDish!:Dish;
  ngOnInit(): void 
  {
    this.dishService.getDishes().subscribe(res=> this.dishes=res,error=>this.Error=error);
  }

  onSelect(dish:Dish)
  {
    debugger;
    this.selectedDish=dish;
  }
}
