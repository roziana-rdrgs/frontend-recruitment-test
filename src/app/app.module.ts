import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarouselModule } from './components/carousel/carousel.module';
import { ReviewerCardModule } from './components/reviewer-card/reviewer';

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
    CarouselModule,
    ReviewerCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
