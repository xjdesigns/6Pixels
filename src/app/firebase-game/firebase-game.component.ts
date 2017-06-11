import { Component } from '@angular/core';
import { AlertService } from '../services/alert-service';
import { FirebaseService } from '../services/firebase.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-firebase-game',
  templateUrl: 'app/firebase-game/firebase-game.component.html',
  providers: [ FirebaseService ]
})
export class FirebaseGameComponent {
  users = [];
  one = {};
  currentUserIdToIncrement= 0;

  constructor(private alertService: AlertService, private ffbs: FirebaseService) {
    this.ffbs.init();
  }

  ngOnInit() {
    this.ffbs.getData().subscribe(data => {
      console.warn('sub data', data);
      this.users = data;
      console.warn('users', this.users);
      console.warn(this.users[this.users.length - 1]);
    });
    console.warn('users outside', this.users);
  }

  verdict(form) {
    console.warn(form.value);
  }

  // addAlert() {
  //   this.alertService.addAlert('Fail alert message', 'error');
  // }
  //
  // clearAll() {
  //   this.alertService.clearSubject();
  // }

  createNewUser(uuid, name) {
    this.ffbs.writeUserData(1225, 'tony jacobson', 'jason@jason.com', 'none');
  }

  getUser(uuid) {
    this.ffbs.writeUserData(1225, 'tony jacobson', 'jason@jason.com', 'none');
  }
}
