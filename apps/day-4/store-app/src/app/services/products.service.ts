import { Injectable, EventEmitter } from '@angular/core';

import { ProductModel } from '../models/product-model';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ProductsService {
  editProductEvent = new EventEmitter<ProductModel>();

  products: ProductModel[] = [
    {
      id: 1,
      name: 'iPhone X',
      description: 'A mobile phone from Apple',
      isAvailable: true,
      price: 60000
    },
    {
      id: 2,
      name: 'Samsung Galaxy Note 10',
      description: 'A mobile phone from Samsung. A mobile phone from Samsung',
      isAvailable: true,
      price: 80000
    },
    {
      id: 3,
      name: 'Google Pixel 3',
      description: 'A mobile phone from Google',
      isAvailable: false,
      price: 50000
    }
  ];

  getProducts(): ProductModel[] {
    return this.products;
  }

  addProduct(product: ProductModel) {
    this.products.unshift(product);
  }

  deleteProduct(productId: number) {
    const index = this.products.findIndex(p => {
      return p.id === productId;
    });

    if (index >= 0) {
      this.products.splice(index, 1);
    }
  }

  beginEdit(productId: number) {
    const p = this.products.find(p => p.id === productId);
    if (!p) {
      console.log('Product not found!');
      return;
    }

    const product: ProductModel = { ...p };
    this.editProductEvent.emit(product);
  }

  updateProduct(product: ProductModel) {
    const p = this.products.find(p => p.id === product.id);
    if (!p) {
      console.log('Product not found!');
      return;
    }

    p.name = product.name;
    p.description = product.description;
    p.price = product.price;
    p.isAvailable = product.isAvailable;
  }
}
