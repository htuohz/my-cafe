import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CartComponent} from '../cart/cart.component'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems:Item[]
  
  item : Item = {
    itemId:'1',
    name:'pizza',
    description: 'The pizza is delicious',
    price:10.5,
    url:'https://b.zmtcdn.com/data/reviews_photos/68d/18bdfc4071f7daff3077dc93a8eaa68d_1544025555.jpg'
  };
 
  

  // public addClicked(event,item){
  //   alert('Open ' + item.name);
  //   this.cartObject.addToCart(item);
    
  // }
  constructor() { }

  @Input() products: any[];
  @Output() itemAdded = new EventEmitter();
  addItemToCart(product) {
    this.itemAdded.emit(product);
  }

  ngOnInit() {
    this.menuItems = [
      {    itemId:'1',
    name:'pizza',
    description: 'The pizza is delicious',
    price:10.5,
    url:'https://b.zmtcdn.com/data/reviews_photos/68d/18bdfc4071f7daff3077dc93a8eaa68d_1544025555.jpg'},
    {    itemId:'2',
    name:'pizza2',
    description: 'The pizza is delicious too',
    price:13,
    url:'https://b.zmtcdn.com/data/reviews_photos/68d/18bdfc4071f7daff3077dc93a8eaa68d_1544025555.jpg'}
  ]
  }

}

export class Item{
  itemId:string;
  description:string = '';
  name:string;
  price:number;
  url:string;
  
  constructor(){}
}


