import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: 'app/components/elements/progress-bar.component.html'
})

export class ProgressBarComponent {
  progWidth: number = 0;

  constructor() {
    setInterval(() => {
      this.progWidth = Math.random() * (100 - 0) + 0;
    }, 3000);
  }
}
