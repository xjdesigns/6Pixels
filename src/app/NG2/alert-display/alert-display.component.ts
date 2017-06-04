import { Component } from '@angular/core';
import { AlertService } from '../../services/alert-service';
import { FirebaseService } from '../../services/firebase.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-alert-display',
  templateUrl: 'app/NG2/alert-display/alert-display.component.html',
  providers: [ FirebaseService ]
})
export class AlertDisplayComponent {
  description = [{
    add: '[tileData]',
    desc: '[tileData] object, see properties below'
  }];

  constructor(private alertService: AlertService, private ffbs: FirebaseService) {
    this.ffbs.init();
  }

  ngOnInit() {
    // this.ffbs.getData().subscribe(data => {
    //   console.warn('sub data', data);
    // });
  }

  addAlert() {
    this.alertService.addAlert('Fail alert message', 'error');
  }

  clearAll() {
    this.alertService.clearSubject();
  }

  getUser(uuid) {
    this.ffbs.writeUserData(1225, 'tony jacobson', 'jason@jason.com', 'none');
  }
}
