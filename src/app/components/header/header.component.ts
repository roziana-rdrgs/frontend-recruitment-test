import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent  implements OnInit {
  ngOnInit(): void {
  }

  public headerMenu: MenuItem[] = [
    { title: "Home", link: "", active: true},
    { title: "Sobre Nós", link: ""},
    { title: "Loja", link: "", submenus: [
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
  submenus?: MenuItem[]
}
