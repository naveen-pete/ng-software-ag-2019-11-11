import { Component } from '@angular/core';

import { ProductModel } from '../models/product-model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  today = Date.now();

  showMessage = false;

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
      description: 'A mobile phone from Samsung',
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

  product: ProductModel = new ProductModel();

  onSubmit() {
    this.products.unshift(this.product);
    this.product = new ProductModel();
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 3000);
  }

  onDelete(productId) {
    const index = this.products.findIndex(p => {
      return p.id === productId;
    });

    if (index >= 0) {
      this.products.splice(index, 1);
    }
  }
}
