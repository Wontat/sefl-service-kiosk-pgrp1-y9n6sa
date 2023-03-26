import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../cart.service';
import { Item } from '../../item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent implements OnInit {
  @Input() item: any;
  amount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  onAdd(item: Item, amount: any) {
    this.cartService.addToCart(item, amount);
  }

  onMinus() {
    if (this.amount > 1) {
      this.amount--;
    }
  }
  onPlus() {
    this.amount++;
  }
}
