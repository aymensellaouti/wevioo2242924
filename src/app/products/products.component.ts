import { Component, inject } from '@angular/core';
import { BehaviorSubject, Observable, concatMap, map, takeWhile, scan } from 'rxjs';
import { Product } from './dto/product.dto';
import { ProductService } from './services/product.service';
import { Settings } from './dto/product-settings.dto';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productService = inject(ProductService);
  setting: Settings = {limit: 12, skip: 0};
  settings$ = new BehaviorSubject<Settings>(this.setting);
  products$: Observable<Product[]> = this.settings$.pipe(
    concatMap(setting => this.productService.getProducts(setting)),
    map(productServiceResponse => productServiceResponse.products),
    takeWhile(response => !!response.length),
    scan((oldProducts, newProducts) => ([...oldProducts, ...newProducts])),
  );
  constructor() {}

  moreProducts(): void {
    this.setting.skip = this.setting.limit + this.setting.skip;
    this.settings$.next(this.setting);
  }
}
