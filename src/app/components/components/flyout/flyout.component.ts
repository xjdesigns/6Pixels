import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-flyout',
  templateUrl: 'flyout.component.html'
})

export class FlyoutComponent {
  flyoutIsLeftOpen: boolean = false;
  flyoutIsRightOpen: boolean = false;

  toggleFlyout(s) {
    if (s === 'lt') {
      this.flyoutIsLeftOpen = !this.flyoutIsLeftOpen;
    } else {
      this.flyoutIsRightOpen = !this.flyoutIsRightOpen;
    }
  }
}
