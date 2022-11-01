import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-notification',
  templateUrl:  `./cookie-notification.component.html`,
  styleUrls: ['./cookie-notification.component.css']
})
export class CookieNotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    
    displayNotification:boolean=false;
    
    closeNotification(){
      this.displayNotification=true;
    }

}
