import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert-service';

 @Component({
    selector: 'alert',
    templateUrl: 'app/services/alert/alert.html'
 })

 export class AlertComponent {
   message: any;
   messages = [];

   constructor(private alertService: AlertService) { }

   ngOnInit() {
     var j = [];
      this.alertService.getMessage()
        .subscribe(message => {
          console.warn('msg sub::', message);
          this.message = message;
        });
   }

   removeAlert(i) {
     console.warn('alert', i, this);
     this.alertService.removeAlert(i);
   }
 }
