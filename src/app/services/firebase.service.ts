import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'firebase';

@Injectable()
export class FirebaseService {
  public db: any;
  items = [];
  q = [];
  constructor() {}

  init() {
    var config = {
      apiKey: "AIzaSyCtWS13cYro9d3PgPqb3qYkpBYUSLlCmJQ",
      authDomain: "testing01-4cbe9.firebaseapp.com",
      databaseURL: "https://testing01-4cbe9.firebaseio.com",
      projectId: "testing01-4cbe9",
      storageBucket: "testing01-4cbe9.appspot.com",
      messagingSenderId: "3774538875"
    };
    firebase.initializeApp(config);
  }

  writeUserData(userId, username) {
    firebase.database().ref('users/' + userId).set({
      username: username
    });
  }

  getData() {
    return Observable.create((observer) => {
      firebase.database().ref('users').on('value', (snapshot) => {
        var snap = snapshot.val();
        this.items = [];
        for (var key in snap) {
          this.items.push(snap[key]);
        }
        observer.next(this.items)
      });
    });
  }

  writeNewQuestion(uuid, question) {
    firebase.database().ref('questions/' + uuid).set({
      question: question,
      yes: 0,
      no: 0
    });
  }

  getQuestions() {
    return Observable.create((observer) => {
      firebase.database().ref('questions').on('value', (snapshot) => {
        var snap = snapshot.val();
        this.q = [];
        for (var key in snap) {
          this.q.push(snap[key]);
        }
        observer.next(this.q)
      });
    });
  }

  answerQuestionAtIndex(idx, vote, answer) {
    firebase.database().ref('questions/' + idx).update({
      [vote]: answer
    });
  }
}
