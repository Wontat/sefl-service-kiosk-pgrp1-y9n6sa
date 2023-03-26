import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../cart.service';
import { Item } from '../../item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: {item: Item, amount: number};
  
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  decrease(item) {
    this.cartService.decrease(item);
  }

  increase(item) {
    this.cartService.increase(item);
  }

}