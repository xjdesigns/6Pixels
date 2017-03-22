import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-toast',
  templateUrl: 'toast.component.html'
})

export class ToastComponent {
  isOpen: boolean = false;

  toggleToast() {
    this.isOpen = !this.isOpen;
  }
}
