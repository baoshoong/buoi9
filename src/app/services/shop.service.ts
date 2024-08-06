import { Injectable } from '@angular/core';
import { ProductModel } from '../models/sanpham.model';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor() {}

  cart: any[] = [];
  products: ProductModel[] = [
    {
      id: '1',
      name: 'Product 1',
      price: 100,
      description: 'Description 1',
      imageUrl:
        'https://product.hstatic.net/1000042622/product/at483_1_7e777ceef0f242e38e8e35693a466b2b_master.jpg',
      inStock: 10,
    },
    {
      id: '2',
      name: 'Product 2',
      price: 200,
      description: 'Description 2',
      inStock: 20,
      imageUrl:
        'https://product.hstatic.net/1000042622/product/at483_1_7e777ceef0f242e38e8e35693a466b2b_master.jpg',
    },
    {
      id: '3',
      name: 'Product 3',
      price: 300,
      description: 'Description 3',
      inStock: 30,
      imageUrl:
        'https://product.hstatic.net/1000042622/product/at483_1_7e777ceef0f242e38e8e35693a466b2b_master.jpg',
    },
  ];

  addToCart(item: any) {
    let index = this.cart.findIndex((product) => product.id == item.id);
    let indexProduct = this.products.findIndex(
      (product) => product.id == item.id,
    );
    if (this.products[indexProduct].inStock == 0) {
      return;
    }
    if (index != -1) {
      this.cart[index].quantity++;
      this.products[indexProduct].inStock--;
    } else {
      this.cart.push(item);
      this.products[indexProduct].inStock--;
    }
  }
}
