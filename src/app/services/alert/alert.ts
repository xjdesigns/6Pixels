import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert-service';

@Component({
  moduleId: module.id
  selector: 'alert',
  templateUrl: 'alert.html'
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
}
