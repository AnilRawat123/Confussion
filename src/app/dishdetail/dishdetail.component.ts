import { Component, OnInit ,Input} from '@angular/core';
import { Dish } from '../Shared/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {
    @Input()
    selectedDish!:Dish;

  constructor() { }

  ngOnInit(): void {
     
  }
}
