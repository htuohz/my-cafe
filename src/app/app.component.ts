import { Component } from '@angular/core';
import { MenuComponent, Item } from './menu/menu.component';
import { CartItem } from './cart/cart.component';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'my-cafe';
  items: CartItem[] = [];
  eventsSubject: Subject<void> = new Subject<void>();

  addToCart(product) {

    if(this.items.length==0)
    {
      this.items.push(new CartItem(product,1));
      this.items[0].total = this.items[0].item.price * this.items[0].count;
      this.eventsSubject.next();
    }
    else
    {
      for(var i=0;i<this.items.length;i++)
      {
        
        if(this.items[i].item == product)
        {
          this.items[i].count = this.items[i].count + 1;
          this.items[i].total = this.items[i].item.price * this.items[i].count;
          this.eventsSubject.next();
          return;
        }
        
        
      }
      this.items.push(new CartItem(product,1));
      this.items[this.items.length].total = this.items[this.items.length].item.price * this.items[this.items.length].count;
      this.eventsSubject.next();
    }
   

  }

  
}



  

// class CartItem {
//   item: Item;
//   count: number;
//   total = this.item.price * this.count;
  


// constructor(_item: Item, _count: number) {
//   this.item = _item;
//   this.count = _count;

// }
// }
