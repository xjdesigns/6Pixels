import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: 'app/components/components/accordion/accordion.component.html'
})

export class AccordionComponent {
  isActive: boolean = false;

  toggleAcc() {
    this.isActive = !this.isActive;
  }
}
