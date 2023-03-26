import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable()
export class ReceiptService {
  constructor() {}

  receipt() {
    print(Item);
  }
}
