import { Component, OnInit, Input } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent  implements OnInit {
  ngOnInit(){
  }

  public headerMenu: MenuItem[] = [
    { title: "Home", link: "", active: true},
    { title: "Sobre Nós", link: ""},
    { title: "Loja", link: "", submenu: [
      { title: "Limpeza", link: ""},
      { title: "Hidratação", link: ""},
      { title: "Proteção", link: ""},
      { title: "Kits", link: ""},
      { title: "Ver todos", link: ""}
    ]}
  ];

  public onSelectMenu( menu: MenuItem){
    this.headerMenu.forEach(element => {
      element.active = menu == element
    });

  }
}

export interface MenuItem {
  title: string
  link: string
  active?: boolean
  submenu?: MenuItem[]
}
