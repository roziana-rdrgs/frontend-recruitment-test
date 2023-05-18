import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.sass']
})
export class ProductsCardComponent implements OnInit{
  @Input("product") product: any;
  public displayButtonBuy = false;
  ngOnInit() {}

  public getProductCategory(category: string){
    switch(category){
      case 'Proteção':
        return 'protect';

      case 'Hidratação':
        return 'hidra';

      case 'Limpeza':
        return 'clean';

      default:
        return '';
    }
  }

}
