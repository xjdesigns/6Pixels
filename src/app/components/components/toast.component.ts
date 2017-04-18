import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: 'app/components/components/toast.component.html'
})

export class ToastComponent {
  isOpen: boolean = false;

  toggleToast() {
    this.isOpen = !this.isOpen;
  }
}
