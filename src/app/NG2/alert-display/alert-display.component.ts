import { Component } from '@angular/core';
import { AlertService } from '../../services/alert-service';

@Component({
  selector: 'app-alert-display',
  templateUrl: 'app/NG2/alert-display/alert-display.component.html'
})
export class AlertDisplayComponent {
  description = [{
    add: '[tileData]',
    desc: '[tileData] object, see properties below'
  }];

  constructor(private alertService: AlertService) {}

  addAlert() {
    this.alertService.addAlert('Fail alert message', 'error', this.jasonRocks);
  }

  clearAll() {
    this.alertService.clearSubject();
  }

  jasonRocks() {
    console.warn('Did this work jasonRocks::');
  }
}
