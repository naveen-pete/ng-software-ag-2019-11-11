import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from '../models/product-model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: ProductModel[], searchText: string): ProductModel[] {
    if (searchText.trim().length <= 0) {
      return products;
    }

    const filteredProducts = products.filter((p) => {
      return p.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0;
    });

    return filteredProducts;
  }

}
