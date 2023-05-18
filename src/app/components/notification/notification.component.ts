import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent implements OnInit{
  @Output() close = new EventEmitter<boolean>();
  ngOnInit() {  }

  closeNotification(){
    this.close.emit(true);
  }
}
