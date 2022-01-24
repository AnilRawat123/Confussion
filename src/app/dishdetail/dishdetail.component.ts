import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../Shared/dish';

import { DishService } from '../Services/dish.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {
    dish!:Dish;

  constructor(private dishservice:DishService,private location:Location,private route:ActivatedRoute) { }
  ngOnInit(): void {  
     let Id=this.route.snapshot.params['id'];
     this.dishservice.getDish(Id).then(res=>this.dish=res);
  }

  goback():void{
this.location.back();
  }
}
