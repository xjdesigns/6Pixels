import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: 'app/NG2/countdown.component.html'
})

export class CountdownComponent implements OnInit {
  @Input() date: string = '2017-03-03';

  timeRemaining = {
    total: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  ngOnInit() {
    this.initializeClock(this.date);
  }

  initializeClock(endTime) {
    let timeInterval = setInterval(() => {
      this.timeRemaining = calcRemainingTime(endTime);
      if (this.timeRemaining.total <= 0 ) {
        clearInterval(timeInterval);
      }
    }, 1000);
  }
}

function calcRemainingTime(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date().toString());
  let seconds = Math.floor( (t / 1000) % 60 );
  let minutes = Math.floor( (t / 1000 / 60) % 60 );
  let hours = Math.floor( (t / (1000 * 60 * 60)) % 24 );
  let days = Math.floor( t / (1000 * 60 * 60 * 24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
