import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert-service';

 @Component({
    selector: 'alert',
    templateUrl: 'app/services/alert/alert.html'
 })

 export class AlertComponent {
   message = [];

   constructor(private alertService: AlertService) { }

   ngOnInit() {
    this.alertService.getMessage()
      .subscribe(message => {
        this.message = message;
      });
  }

  removeAlert(i) {
    this.alertService.removeAlertByIndex(i);
  }

  // popOnInterval(dur = 1000) {
  //   var clear = setInterval(() => {
  //     this.message.shift()
  //
  //     if (this.message.length === 0) {
  //       clearInterval(clear);
  //     }
  //   }, dur);
  // }
 }
