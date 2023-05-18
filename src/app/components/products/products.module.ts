import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCarouselComponent } from './products-carousel/products-carousel.component';
import { ProductsCardComponent } from './products-card/products-card.component';
import { CarouselModule } from 'primeng/carousel';
import { BrowserModule,  } from '@angular/platform-browser';
import { BrowserAnimationsModule,  } from '@angular/platform-browser/animations';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ProductsCarouselComponent,
    ProductsCardComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbRatingModule
  ],
  exports: [
    ProductsCardComponent,
    ProductsCarouselComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ProductsModule { }
