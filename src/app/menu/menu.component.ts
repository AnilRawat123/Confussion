import { Component, OnInit } from '@angular/core';
import {Dish} from '../Shared/dish';
import {DISHES} from '../Shared/dishes'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes:Dish[]=DISHES;
 
  constructor() { }
  selectedDish!:Dish;
  ngOnInit(): void 
  {

  }

  onSelect(dish:Dish)
  {
    debugger;
    this.selectedDish=dish;
  }
}
