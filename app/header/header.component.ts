import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  amount: number = 0;
  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.cartService.newTotal.subscribe((data) => {
      this.amount = data.amount;
    });
  }
}
