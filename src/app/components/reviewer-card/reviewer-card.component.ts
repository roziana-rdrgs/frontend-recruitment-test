import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review';
import { ReviewerService } from 'src/app/services/reviewer/reviewer.service';

@Component({
  selector: 'app-reviewer-card',
  templateUrl: './reviewer-card.component.html',
  styleUrls: ['./reviewer-card.component.sass']
})
export class ReviewerCardComponent implements OnInit{

  public reviews: Review[] = []
  responsiveOptions: any[];

  constructor(reviewerService: ReviewerService) {
    this.reviews = reviewerService.getReviews();
    this.responsiveOptions = [
      {
          breakpoint: '1400px',
          numVisible: 5,
          numScroll: 3
      },
      {
          breakpoint: '1220px',
          numVisible: 5,
          numScroll: 2
      },
      {
          breakpoint: '1100px',
          numVisible: 3,
          numScroll: 1
      },
      {
        breakpoint: '500px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  ngOnInit() { }

}
