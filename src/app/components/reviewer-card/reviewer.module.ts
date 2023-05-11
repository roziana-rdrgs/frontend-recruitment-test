
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewerCardComponent } from './reviewer-card.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { IvyCarouselModule} from 'angular-responsive-carousel';
import { DragScrollModule } from 'ngx-drag-scroll';
import { CarouselModule } from '../carousel/carousel.module';

@NgModule({
  declarations: [
    ReviewerCardComponent,

  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    IvyCarouselModule,
    DragScrollModule,
    CarouselModule
  ],
  exports: [
    ReviewerCardComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ReviewerCardModule { }
