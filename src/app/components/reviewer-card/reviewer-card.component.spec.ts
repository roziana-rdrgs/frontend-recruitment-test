import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerCardComponent } from './reviewer-card.component';

describe('ReviewerCardComponent', () => {
  let component: ReviewerCardComponent;
  let fixture: ComponentFixture<ReviewerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
