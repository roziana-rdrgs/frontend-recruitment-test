import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.sass']
})
export class SubscriptionComponent implements OnInit{
  public name: string = ""
  public email: string = ""

  public subscriptionSent = false
  ngOnInit() {
    this.name = "";
    this.email = "";
  }
  public sendSubscription(){
    this.subscriptionSent = this.name.length > 0 && this.email.length > 0;
  }
}
