import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviewer-card',
  templateUrl: './reviewer-card.component.html',
  styleUrls: ['./reviewer-card.component.sass']
})
export class ReviewerCardComponent implements OnInit{


  public reviews: Review[] = [
    { userName: '@anassssss', description: 'ajsdiasjidjisjoiasfjdjhfihasdfuhasdfsd', image: '../../../assets/images/reviews/image-1.png'},
    { userName: '@anassssss', description: 'ajsdiasjidjisjoiasfjdjhfihasdfuhasdfsd', image: '../../../assets/images/reviews/image-2.png'},
    { userName: '@anassssss', description: 'ajsdiasjidjisjoiasfjdjhfihasdfuhasdfsd', image: '../../../assets/images/reviews/image-3.png'},
    { userName: '@anassssss', description: 'ajsdiasjidjisjoiasfjdjhfihasdfuhasdfsd', image: '../../../assets/images/reviews/image-4.png'},
    { userName: '@anassssss', description: 'ajsdiasjidjisjoiasfjdjhfihasdfuhasdfsd', image: '../../../assets/images/reviews/image-5.png'}
  ]

  public reviewsResponsive: Review[] =[];
  ngOnInit() {

    if (window.screen.width <= 700) { //

    }

    /*
    Carousel
*/

  }

}


export interface Review{
  userName: string
  description: string
  image: string
}
