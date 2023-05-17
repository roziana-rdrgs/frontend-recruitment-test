import { CarouselModule } from './../carousel/carousel.module';

import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewerCardComponent } from './reviewer-card.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ReviewerCardComponent,

  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    CarouselModule,
    CarouselModule
  ],
  exports: [
    ReviewerCardComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],


})
export class ReviewerCardModule { }
