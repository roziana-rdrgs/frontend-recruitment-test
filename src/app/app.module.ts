import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ReviewerCardModule } from './components/reviewer-card/reviewer.module';
import { HomeModule } from './pages/home/home.module';

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
    ReviewerCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
