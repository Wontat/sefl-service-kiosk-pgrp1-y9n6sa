import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Item } from './item';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {
  cartItems: { item: Item; amount: digit }[] = [];
  total: number = 0;
  totalAmount: digit = 0;

  newTotal = new Subject();

  constructor() {}

  getCartItems(): Observable<{ item: Item; amount: number }[]> {
    return of(this.cartItems);
  }

  ngOnInit() {}

  addToCart(item: Item, amount: digit) {
    let m = this.cartItems.find((cartItem) => {
      return cartItem.item == item;
    });
    if (m) {
      m.amount += amount;
    } else {
      this.cartItems.push({ item: item, amount: amount });
    }
    this.recalculate();
  }

  recalculate() {
    let sum = 0;
    let amt = 0;
    for (let cartItem of this.cartItems) {
      sum += cartItem.item.price * cartItem.amount;
      amt += cartItem.amount;
    }
    this.total = sum;
    this.totalAmount = amt;
    this.newTotal.next({ total: this.total, amount: this.totalAmount });
  }

  decrease(item) {
    if (item.amount > 1) {
      item.amount -= 1;
    } else if ((item.amount = 1)) {
      let index = this.cartItems.indexOf(item);
      this.cartItems.splice(index, 1);
    }
    this.recalculate();
  }

  increase(item) {
    item.amount += 1;
    this.recalculate();
  }

  removeItem(item) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
    this.recalculate();
  }
}
