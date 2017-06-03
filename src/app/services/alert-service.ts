import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;
  private list = [];

  constructor(private router: Router) {
      // clear alert message on route change
      router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          // only keep for a single location change
          this.keepAfterNavigationChange = false;
        } else {
          this.clearSubject();
        }
      }
    });
  }

  // success(message: string, keepAfterNavigationChange = false) {
  //   this.keepAfterNavigationChange = keepAfterNavigationChange;
  //   this.subject.next({ type: 'success', text: message });
  // }
  //
  // error(message: string, keepAfterNavigationChange = false) {
  //   this.keepAfterNavigationChange = keepAfterNavigationChange;
  //   this.subject.next({ type: 'error', text: message });
  // }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  addAlert(message, type = 'success') {
    this.keepAfterNavigationChange = true;
    this.list.push({type: type, text: message});
    this.serviceNext(this.list);
  }

  removeAlertByIndex(i) {
    this.list.splice(i, 1);
    this.serviceNext(this.list);
  }

  clearSubject() {
    this.list.splice(0, this.list.length);
    this.serviceNext(this.list);
  }

  serviceNext(alerts) {
    this.subject.next(alerts);
  }
 }
