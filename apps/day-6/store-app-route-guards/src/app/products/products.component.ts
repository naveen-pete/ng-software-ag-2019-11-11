import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  isAuthenticated: boolean = false;

  constructor(
    private service: ProductsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isAuthenticated = this.authService.isLoggedIn;

    this.service.getProducts().subscribe(
      products => this.products = products,
      error => {
        console.log('Get products failed.');
        console.log('Error:', error.message);
      }
    );
  }

  onDelete(productId: number) {
    if (confirm('Are you sure?')) {
      this.service.deleteProduct(productId).subscribe(
        () => this.products = this.products.filter(p => p.id !== productId),
        error => {
          console.log('Delete product failed.');
          console.log('Error:', error.message);
        }
      );
    }
  }
}
