import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{
  ngOnInit(){}

  public displayNotification = true

  public setDisplayNotification(close: boolean){
    this.displayNotification = !close;
  }
}
