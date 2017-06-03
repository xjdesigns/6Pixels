import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'firebase';
// declare var firebase: any

@Injectable()
export class FirebaseService {
    public db: any;
    items = [];
    constructor() {}

    // TODO: Move this somewhere else maybe???
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

    writeUserData(userId, name, email, imageUrl) {
      firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl
      });
    }

    getData() {
      return Observable.create((observer) => {
        firebase.database().ref('users').on('value', (snapshot) => {
          var snap = snapshot.val();
          for (var key in snap) {
            this.items.push(snap[key]);
          }
          observer.next(this.items)
        });
      });
    }
}
