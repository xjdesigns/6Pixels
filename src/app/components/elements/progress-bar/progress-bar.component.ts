import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-progress-bar',
  templateUrl: 'progress-bar.component.html'
})

export class ProgressBarComponent {
  progWidth: number = 0;

  constructor() {
    setInterval(() => {
      this.progWidth = Math.random() * (100 - 0) + 0;
    }, 3000);
  }
}
