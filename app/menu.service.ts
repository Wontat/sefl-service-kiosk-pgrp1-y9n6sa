import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable()
export class MenuService {
  menu = [
    new Item(
      'Cheese Garlic Bread',
      '',
      'https://upload.wikimedia.org/wikipedia/commons/5/5a/Korean_cream_cheese_garlic_bread.jpg',
      64
    ),

    new Item(
      'Cheese Croquettes in a salad',
      '',
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Croquettes_with_salad.jpg',
      86
    ),

    new Item(
      'Spring Rolls',
      '',
      'https://upload.wikimedia.org/wikipedia/commons/a/ae/Spring_rolls_%281%29.jpg',
      250
    ),

    new Item(
      'Panang Curry',
      '',
      'https://upload.wikimedia.org/wikipedia/commons/0/0d/Panang_curry_%2842943883862%29.jpg',
      250
    ),
    new Item(
      'Spicy Basil Chicken',
      '',
      'https://upload.wikimedia.org/wikipedia/commons/2/25/Basil_Fried_Rice_with_Chicken_-_Mint_Thai%2C_Centro_Box_Hill_North_AUD9_-_by_Julia_%283452275342%29.jpg',
      250
    ),
    new Item(
      'Honey Garlic Chicken',
      '',
      'https://upload.wikimedia.org/wikipedia/commons/d/d7/Honey_chicken_wings_%286630284309%29.jpg',
      250
    ),
    new Item(
      'Spatlese Wine',
      '',
      'https://upload.wikimedia.org/wikipedia/commons/b/b0/2007_Selbach-Oster_Graacher_Domprobst_Riesling_Sp%C3%A4tlese_Halbrtocken_from_Mosel_%285360436866%29.jpg',
      250
    ),
    new Item(
      'Tropical Fruit Juice',
      '',
      'https://upload.wikimedia.org/wikipedia/commons/1/18/ARS_tropical_fruit_no_labels.jpg',
      250
    ),
    new Item(
      'Kulfi',
      '',
      'https://upload.wikimedia.org/wikipedia/commons/3/33/Kulfi_de_pistatxo.jpg',
      250
    ),
    new Item(
      'Dondurma',
      '',
      'https://upload.wikimedia.org/wikipedia/commons/5/51/Dondurma_with_kabak.jpg',
      257
    ),
  ];

  constructor() {}

  getMenu() {
    return this.menu.slice();
  }
}
