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
  users: any = [];
  questions = [];
  userLength = 0;
  currentUser: any = {};
  currentUserCount = 0;
  thumbsActive = false;

  constructor(private alertService: AlertService, private ffbs: FirebaseService) {
    this.ffbs.init();
  }

  ngOnInit() {
    this.ffbs.getData().subscribe(data => {
      this.users = data;
      this.currentUserCount = this.users.length;
    });
    this.ffbs.getQuestions().subscribe(data => {
      this.questions = data;
    });
  }

  //users
  checkIn(val, ev) {
    ev.preventDefault();
    this.currentUser = {
      username: val.value.username,
      name: val.value.name
    }

    this.checkForUser();

    this.thumbsActive = true;
    setTimeout(() => {
      this.thumbsActive = false;
    }, 10000);
  }

  createNewUser(uuid, name) {
    this.ffbs.writeUserData(uuid, name);
  }

  checkForUser() {
    var j = this.users.filter((user) => {
      return user.username === this.currentUser.username ? true : false;
    });
    if (j.length > 0) {
      this.currentUser = this.currentUser;
    } else {
      this.createNewUser(this.currentUserCount + 1, this.currentUser.username);
    }
  }

  // questions
  addQuestion(question, ev) {
    ev.preventDefault();
    var q = question.value.question;
    var uuid = this.questions.length + 1;
    this.ffbs.writeNewQuestion(uuid, q);
  }

  vote(vote, idx) {
    this.ffbs.answerQuestionAtIndex(idx + 1, vote, this.questions[idx][vote] + 1);
  }

  // addAlert(msg) {
  //   this.alertService.addAlert(msg, 'success');
  // }
  //
  // clearAll() {
  //   this.alertService.clearSubject();
  // }
}
