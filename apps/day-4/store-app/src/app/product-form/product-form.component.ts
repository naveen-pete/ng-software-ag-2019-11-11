import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProductModel } from '../models/product-model';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnDestroy {
  showMessage: boolean = false;
  product: ProductModel = new ProductModel();
  editEventSubscription: Subscription;
  editMode = false;

  constructor(private logger: LoggerService, private productsService: ProductsService) { }

  ngOnInit() {
    this.editEventSubscription = this.productsService.editProductEvent.subscribe((product: ProductModel) => {
      this.product = product;
      this.editMode = true;
    });
  }

  ngOnDestroy() {
    this.editEventSubscription.unsubscribe();
  }

  onAdd() {
    this.logger.log('Product information added.');
    this.productsService.addProduct(this.product);

    this.product = new ProductModel();
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 3000);
  }

  onUpdate() {
    this.logger.log('Product information updated.');
    this.productsService.updateProduct(this.product);

    this.product = new ProductModel();
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
      this.editMode = false;
    }, 3000);
  }

}
