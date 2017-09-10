import { Component } from '@angular/core';

@Component({
  selector: 'app-flyout',
  templateUrl: 'app/components/components/flyout/flyout.component.html'
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
