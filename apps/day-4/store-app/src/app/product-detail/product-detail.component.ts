import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { ProductModel } from '../models/product-model';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() product: ProductModel;

  constructor(private logger: LoggerService, private productsService: ProductsService) { }

  onDelete(productId: number) {
    this.logger.log('Product deleted.');
    this.productsService.deleteProduct(productId);
  }

  onEdit(productId: number) {
    this.productsService.beginEdit(productId);
  }
}
