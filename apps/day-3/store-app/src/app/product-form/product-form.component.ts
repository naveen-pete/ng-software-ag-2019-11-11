import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ProductModel } from '../models/product-model';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() productCreated: EventEmitter<ProductModel> = new EventEmitter();

  showMessage: boolean = false;
  product: ProductModel = new ProductModel();

  constructor(private logger: LoggerService, private productsService: ProductsService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.logger.log('Product information submitted.');
    this.productsService.addProduct(this.product);

    // this.productCreated.emit(this.product);
    this.product = new ProductModel();
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 3000);
  }


}
