//import { CarouselModule } from './../carousel/carousel.module';

import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewerCardComponent } from './reviewer-card.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'primeng/carousel';
import { BrowserModule,  } from '@angular/platform-browser';
import { BrowserAnimationsModule,  } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    ReviewerCardComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbCarouselModule,
    BrowserAnimationsModule,
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
