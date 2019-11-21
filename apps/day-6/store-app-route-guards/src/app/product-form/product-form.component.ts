import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Product } from '../models/product';
import { CanComponentDeactivate } from '../guards/can-deactivate.guard';
import { ProductsService } from '../services/products.service';
import { DialogService } from '../services/dialog.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, CanComponentDeactivate {
  id: number;
  product: Product;
  addNew: boolean;
  @ViewChild('f', { static: false }) productForm: NgForm;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService,
    private dialogService: DialogService
  ) {
    this.product = new Product();
    this.addNew = true;
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(map => {
        if (!map.get('id')) {
          return throwError(new Error('Product id missing. Entering Add mode.'));
        }

        this.id = +map.get('id');
        return this.service.getProduct(this.id);
      })
    ).subscribe(
      product => {
        this.product = product;
        this.addNew = false;
      },
      error => {
        console.log('Get product failed.');
        console.log('Error:', error.message);
      }
    );
  }

  onSubmit() {
    this.product.name = this.productForm.value.name;
    this.product.description = this.productForm.value.description;
    this.product.price = +this.productForm.value.price;
    this.product.isAvailable = this.productForm.value.isAvailable
      ? this.productForm.value.isAvailable
      : false;

    if (this.addNew) {
      this.service.addProduct(this.product).subscribe(
        () => {
          this.router.navigate(['/products'])
        },
        error => {
          console.log('Add product failed.');
          console.log('Error:', error.message);
        }
      );
    } else {
      this.service.updateProduct(this.id, this.product).subscribe(
        () => {
          this.router.navigate(['/products'])
        },
        error => {
          console.log('Update product failed.');
          console.log('Error:', error.message);
        }
      );
    }
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    let { name, description, price, isAvailable } = this.productForm.value;
    price = +price; // convert string to number

    if (
      this.product.name !== name ||
      this.product.description !== description ||
      this.product.price !== price ||
      this.product.isAvailable !== isAvailable
    ) {
      return this.dialogService.confirm('Discard changes?');
    }

    return true;
  }

}
