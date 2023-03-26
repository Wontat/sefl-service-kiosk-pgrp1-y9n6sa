import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];
  total = 0;

  constructor(public cartService: CartService) {
  }

  ngOnInit() {
    this.total = this.cartService.total;
    this.cartService.getCartItems()
      .subscribe(
        (cartItems) => {this.cartItems = cartItems}
    );

    // this.total = this.cartService.total;

    this.cartService.newTotal.subscribe(
      (data) => {
        this.total = data.total;
        console.log(this.total);
      }
    );
  }

  printCart() {
    console.log(this.cartService.cartItems);
  }
  
}

