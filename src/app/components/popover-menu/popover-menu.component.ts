import { MenuItem } from './../header/header.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-menu',
  templateUrl: './popover-menu.component.html',
  styleUrls: ['./popover-menu.component.sass']
})
export class PopoverMenuComponent implements OnInit{
  @Input() submenu :MenuItem[] = []

  ngOnInit(){
  }

}
