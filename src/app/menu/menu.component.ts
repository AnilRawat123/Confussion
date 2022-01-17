import { Component, OnInit } from '@angular/core';
import {Dish} from '../Shared/dish';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes:Dish[]=
  [
{
  id:'0',
  name:"Uthapizza",
  image:'/assets/Images/buffet.png',
  category:"main",
  lable:"hot",
  description:"a unique",
  price:"200.0",
  feature:'date',
  comments: [
    {
        rating: 5,
        comment: 'Imagine all the eatables, living in conFusion!',
        author: 'John Lemon',
        date: '2012-10-16T17:57:28.556094Z'
    },
    {
        rating: 4,
        comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
        author: 'Paul McVites',
        date: '2014-09-05T17:57:28.556094Z'
    },
    {
        rating: 3,
        comment: 'Eat it, just eat it!',
        author: 'Michael Jaikishan',
        date: '2015-02-13T17:57:28.556094Z'
    },
    {
        rating: 4,
        comment: 'Ultimate, Reaching for the stars!',
        author: 'Ringo Starry',
        date: '2013-12-02T17:57:28.556094Z'
    },
    {
        rating: 2,
        comment: 'It\'s your birthday, we\'re gonna party!',
        author: '25 Cent',
        date: '2011-12-02T17:57:28.556094Z'
    }
]
},
{
  id:'1',
  name:"zucchipakoda",
  image:'/assets/Images/zucchipakoda.png',
  category:"main",
  lable:"hot",
  description:"a unique",
  price:"200.0",
  feature:'date',
  comments:[]
},
{
  id:'2',
  name:"vadonut",
  image:'/assets/Images/vadonut.png',
  category:"main",
  lable:"hot",
  description:"a unique",
  price:"200.0",
  feature:'date',
  comments:[]
},
{
  id:'2',
  name:"elaicheesecake",
  image:'/assets/Images/elaicheesecake.png',
  category:"main",
  lable:"hot",
  description:"a unique",
  price:"200.0",
  feature:'date',
  comments:[]
}
  ];

  selectedDish = this.dishes[0];
  constructor() { }
  ngOnInit(): void 
  {

  }
}
