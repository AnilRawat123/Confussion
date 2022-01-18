export class Dish
{
    id!: string;
    name!:string;
    image!:string;
    category!:string;
    feature!:boolean;
    label!:string;
    price!:string;
    description!:string;
    comments!: Comment[];
}

export class Comment {
    rating!: number;
    comment!: string;
    author!: string;
    date!: string;
}