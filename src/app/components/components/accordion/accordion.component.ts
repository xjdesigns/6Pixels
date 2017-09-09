import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-accordion',
  templateUrl: 'accordion.component.html'
})

export class AccordionComponent {
  isActive: boolean = false;
  flyoutIsOpen: boolean = false;

  toggleAcc() {
    this.isActive = !this.isActive;
  }

  toggleFlyout() {
    this.flyoutIsOpen = !this.flyoutIsOpen;
  }
}
