import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ReviewerCardModule } from './components/reviewer-card/reviewer.module';
import { HomeComponent } from './pages/home/home.component';
import { CarouselModule } from './components/carousel/carousel.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProductsModule } from './components/products/products.module';
import { FooterComponent } from './components/footer/footer.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    FooterComponent,
    SubscriptionComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    HeaderModule,
    RouterModule,
    ReviewerCardModule,
    CarouselModule,
    ProductsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
