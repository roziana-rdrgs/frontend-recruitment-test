import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit{
  ngOnInit(){
  }

	images = [
    '../../../assets/images/carousel/banner-home.png',
    '../../../assets/images/carousel/banner2-home.png',
    '../../../assets/images/carousel/banner3-home.png',
  ];

}
