import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../models/product-model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']

})
export class ProductsComponent implements OnInit {
  searchText = '';
  today = Date.now();
  products: ProductModel[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onProductCreated(product: ProductModel) {
    this.products.unshift(product);
  }

  onProductDelete(productId: number) {
    const index = this.products.findIndex(p => {
      return p.id === productId;
    });

    if (index >= 0) {
      this.products.splice(index, 1);
    }
  }
}
