import { Injectable } from '@angular/core';
import { ProductData } from './products-data';
import { Product } from './product';

@Injectable()
export class ProductService {

  constructor() { }
  products(productCount): Product[] {
    return ProductData.slice(0, productCount);
  }
  productById (id: string) {
    return ProductData.filter(product => product.id === id)[0];
  }
}
