import { Product } from './../../models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(){
    return [
      {
        name: "Kit Glam Beauty skincare rapidinho",
        image: "../../../assets/images/products/kit-glam-skincare.png",
        rate: 3,
        category: "Proteção",
        old_price: 999.90,
        new_price: 999.80
      },
      {
        name: "Máscara Glam detox de argila verde",
        image: "../../../assets/images/products/mascara-glam-detox.png",
        rate: 3,
        category: "Hidratação",
        old_price: 999.90,
        new_price: 999.80
      },
      {
        name: "Espuma de limpeza Glam Beauty cleam 150 ml",
        image: "../../../assets/images/products/espuma-limpeza-beauty-cleam.png",
        rate: 4,
        category: "Limpeza",
        old_price: 999.90,
        new_price: 999.80
      },
      {
        name: "Hidratante com proteção solar 50 g",
        image: "../../../assets/images/products/hidratante-solar.png",
        rate: 5,
        category: "Proteção",
        old_price: 999.90,
        new_price: 999.80
      },
      {
        name: "Água micelar Glam Beauty fresh 200 ml",
        image: "../../../assets/images/products/agua-micelar.png",
        rate: 2,
        category: "Hidratação",
        old_price: 999.90,
        new_price: 999.80
      },
      {
        name: "Kit Glam Beauty skincare rapidinho",
        image: "../../../assets/images/products/kit-glam-skincare.png",
        rate: 3,
        category: "Proteção",
        old_price: 999.90,
        new_price: 999.80
      },
      {
        name: "Máscara Glam detox de argila verde",
        image: "../../../assets/images/products/mascara-glam-detox.png",
        rate: 3,
        category: "Hidratação",
        old_price: 999.90,
        new_price: 999.80
      },
      {
        name: "Espuma de limpeza Glam Beauty cleam 150 ml",
        image: "../../../assets/images/products/espuma-limpeza-beauty-cleam.png",
        rate: 4,
        category: "Limpeza",
        old_price: 999.90,
        new_price: 999.80
      },
    ];
  }
}
