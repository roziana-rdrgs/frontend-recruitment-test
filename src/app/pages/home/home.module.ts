import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'src/app/components/carousel/carousel.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CarouselModule,
    NgModule
  ],
  exports: [ HomeComponent]
})
export class HomeModule { }
