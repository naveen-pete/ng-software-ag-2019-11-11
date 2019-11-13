import { Injectable } from '@angular/core';

import { ProductModel } from '../models/product-model';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ProductsService {
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
    // make a request to the server
    return this.products;
  }

  addProduct(product: ProductModel) {
    console.log('ProductsService.addProduct() invoked..', product);
    this.products.unshift(product);
    console.log('products:', this.products);
  }

  deleteProduct(productId: number) {
    const index = this.products.findIndex(p => {
      return p.id === productId;
    });

    if (index >= 0) {
      this.products.splice(index, 1);
    }
  }
}
