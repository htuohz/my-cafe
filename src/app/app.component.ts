import { Component } from '@angular/core';
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
  totalSum: number;
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
          this.getTotalSum();
          return;
        }
      
        
      }
      this.items.push(new CartItem(product,1));
      this.items[this.items.length-1].total = this.items[this.items.length-1].item.price * this.items[this.items.length-1].count;
      this.eventsSubject.next();
    }
    this.getTotalSum();

  }
  subtractFromCart(i){
    this.items[i].count--;
    if(this.items[i].count<1)
    {
      this.items.splice(i,1);      
    }
    else
    {
      this.items[i].total = this.items[i].item.price * this.items[i].count;
    }
    this.getTotalSum();
    this.eventsSubject.next();
  }
  
  getTotalSum(){
    this.totalSum = 0;
    this.items.forEach(element => {
      
      this.totalSum = this.totalSum+element.total;
    });
  }
}



  


