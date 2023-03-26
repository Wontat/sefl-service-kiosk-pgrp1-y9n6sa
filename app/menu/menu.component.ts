import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: Item[];

  constructor(private menuServ: MenuService) { }

  ngOnInit() {
    this.menuItems = this.menuServ.getMenu();
  }

}