import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './menu.service';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { markParentViewsForCheckProjectedViews } from '@angular/core/src/view/util';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'cart', component: CartComponent}
];

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ 
    AppComponent, 
    HeaderComponent, 
    HomeComponent, 
    MenuComponent, 
    MenuItemComponent, CartComponent, CartItemComponent 
  ],
  bootstrap:    [ AppComponent ],
  providers: [MenuService, CartService]
})
export class AppModule { }
