import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { CartItem } from '../cart/cart.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }
  order: Order;
@Input() totalSum: any;
  
  @Input() items: any[];
  ngOnInit() {
    this.order = new Order();
  }



}

class Order {
  address:string;
  items: CartItem[];
  
}

