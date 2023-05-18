import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent  implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(){
  }

  public headerMenu: MenuItem[] = [
    { title: "Home", link: "/", active: true},
    { title: "Sobre Nós", link: "about-us"},
    { title: "Loja", link: "", submenu: [
      { title: "Limpeza", link: "https://glam.com.br/loja/collections/glambeauty?page=1&scrollY=172&profile=false&brandIds=&prices...=&prices=&catFilter=limpeza"},
      { title: "Hidratação", link: "https://glam.com.br/loja/collections/glambeauty?page=1&scrollY=172&profile=false&brandIds=&prices...=&prices=&catFilter=hidrata%C3%A7%C3%A3o"},
      { title: "Proteção", link: "https://glam.com.br/loja/collections/glambeauty?page=1&scrollY=172&profile=false&brandIds=&prices...=&prices=&catFilter=prote%C3%A7%C3%A3o"},
      { title: "Kits", link: "https://glam.com.br/loja/collections/glambeauty?page=1&scrollY=172&profile=false&brandIds=&prices...=&prices=&catFilter=kits"},
      { title: "Ver todos", link: "https://glam.com.br/loja/collections/glambeauty"}
    ]}
  ];

  public onSelectMenu( menu: MenuItem){
    this.headerMenu.forEach(element => {
      element.active = menu == element
    });
    if (!menu.submenu)
     this.router.navigate([menu.link])

  }
}

export interface MenuItem {
  title: string
  link: string
  active?: boolean
  submenu?: MenuItem[]
}
