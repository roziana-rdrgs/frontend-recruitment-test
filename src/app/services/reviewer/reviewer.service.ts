import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewerService {

  getReviews(){
    return [
      {
        userName: '@caroll_cassis',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis aliquam consectetur. In auctor urna at ipsum venenatis, vel varius lacus commodo. Etiam a neque lobortis, accumsan mauris viverra, hendrerit tellus.",
        image: '../../../assets/images/reviews/image-1.png'
      },
      {
        userName: '@bypalomasoares',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis aliquam consectetur. In auctor urna at ipsum venenatis, vel varius lacus commodo.",
        image: '../../../assets/images/reviews/image-2.png'
      },
      {
        userName: '@carolaine_moreira',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis aliquam consectetur. In auctor urna at ipsum venenatis, vel varius lacus commodo. Etiam a neque lobortis, accumsan mauris viverra, hendrerit tellus.",
        image: '../../../assets/images/reviews/image-3.png'
      },
      {
        userName: '@thaysnrezende',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis aliquam consectetur.",
        image: '../../../assets/images/reviews/image-4.png'
      },
      {
        userName: '@laissaorsano',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis aliquam consectetur. In auctor urna at ipsum venenatis, vel varius lacus commodo. ",
        image: '../../../assets/images/reviews/image-5.png'
      }
    ]
  }
}
