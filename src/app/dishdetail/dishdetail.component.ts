import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Comment, Dish } from '../Shared/dish';
import { switchMap } from 'rxjs/operators';

import { DishService } from '../Services/dish.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {
  CommentForm!:FormGroup;

  formErrors:any = {
    'author': '',
    'comment': '',
  };

  validationMessages:any = {
    'author': {
      'required':      'author Name is required.',
      'minlength':     'author Name must be at least 2 characters long.',
      'maxlength':     'author cannot be more than 25 characters long.'
    },
    'comment': {
      'required':      'Comment is required.',
      'minlength':     'Comment must be at least 2 characters long.',
      'maxlength':     'Comment cannot be more than 25 characters long.'
    }
  };


    dish!:Dish;
    dishIds!: string[];
    prev!: string;
  next!: string;
  constructor(private fb:FormBuilder,private dishservice:DishService,private location:Location,private route:ActivatedRoute) 
  {
    this.createForm();

   }
  ngOnInit(): void { 
   //  let Id=this.route.snapshot.params['id'];
     //this.dishservice.getDish(Id).subscribe(res=>this.dish=res);
     this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
     this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
     .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }

  setPrevNext(dishId: string) 
  {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goback():void{
this.location.back();
  }

createForm():void{
  this.CommentForm = this.fb.group({
    author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
    comment: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2500)] ],
    rating:[5,[Validators.required]]
  });

  this.CommentForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

  this.onValueChanged(); // (re)set validation messages now
}
onValueChanged(data?: any) {
  if (!this.CommentForm) { return; }
  const form = this.CommentForm;
  for (const field in this.formErrors) {
    if (this.formErrors.hasOwnProperty(field)) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          if (control.errors.hasOwnProperty(key)) {
            this.formErrors[field] += messages[key] + ' ';
          }
        }
      }
    }
  }
}

formatLabel(value: number) {
  if (value >= 1000) {
    return Math.round(value / 1000) + 'k';
  }

  return value;
}

onSubmit() {
 var Comment_ = this.CommentForm.value;
  console.log(Comment_);

var CommentAdd:Comment={
  rating!: Comment_.rating,
  comment!: Comment_.comment,
  author!: Comment_.author,
  date!: new Date().toDateString(),
}
  this.dish.comments.push(CommentAdd);
  this.CommentForm.reset({
      author: '',
      comment: '',
      rating:5,
    });

  //this.CommentForm.reset();
}


}
