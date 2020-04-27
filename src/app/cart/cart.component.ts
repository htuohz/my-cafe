import { Component, OnInit, ViewChild, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../menu/menu.component';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],

})


export class CartComponent implements OnInit {
  private eventsSubscription: Subscription;
  @Input() events: Observable<void>;

  totalSum = 0;
  @Input() items: CartItem[];
  @Output() itemAdded = new EventEmitter();
  addItemToCart(product) {
    this.itemAdded.emit(product);
  }
  removeFromCart(i){
    this.items[i].count--;
    if(this.items[i].count<1)
    {
      this.items.splice(i);
    }
    this.items[i].total = this.items[i].item.price * this.items[i].count;
    this.updateSum();
 
  }

  trackByFn(index,item)
  {
    return index;
  }
  updateSum()
  {
    this.totalSum = 0;
    this.items.forEach(element => {
      this.totalSum = this.totalSum + element.total;
    });
  }
  


  constructor() { }

  


  ngOnInit() {
    this.eventsSubscription = this.events.subscribe(()=>this.updateSum());
  }

  ngOnDestroy(){
    this.eventsSubscription.unsubscribe();
  }

}




export class CartItem {
  item: Item;
  count: number;
  total: number;

  

constructor(_item: Item, _count: number) {
  this.item = _item;
  this.count = _count;
  
}


}
