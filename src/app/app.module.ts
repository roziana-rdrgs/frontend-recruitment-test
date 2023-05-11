import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ReviewerCardModule } from './components/reviewer-card/reviewer.module';
import { CarouselModule } from './components/carousel/carousel.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    RouterModule,
    ReviewerCardModule,
    CarouselModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
