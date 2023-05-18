import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Review } from 'src/app/models/review';
import { ProductsService } from 'src/app/services/products/products.service';
import { ReviewerService } from 'src/app/services/reviewer/reviewer.service';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.sass']
})
export class ProductsCarouselComponent  implements OnInit{

  public products: Product[] = []
  responsiveOptions: any[];

  constructor(productsService: ProductsService) {
    this.products = productsService.getProducts();
    this.responsiveOptions = [
      {
          breakpoint: '1400px',
          numVisible: 5,
          numScroll: 3
      },
      {
          breakpoint: '1220px',
          numVisible: 5,
          numScroll: 2
      },
      {
          breakpoint: '1100px',
          numVisible: 3,
          numScroll: 1
      },
      {
        breakpoint: '800px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '500px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  ngOnInit() { }
}
