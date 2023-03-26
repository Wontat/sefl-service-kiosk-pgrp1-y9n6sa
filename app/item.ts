export class Item {
  name: string; 
  description: string; 
  imgUrl: string;
  price: digit;

  constructor(name: string, description: string, imgUrl: string, price: digit) {
    this.name = name;
    this.description = description;
    this.imgUrl = imgUrl;
    this.price = price;
  }
}