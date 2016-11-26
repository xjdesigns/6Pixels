import { Component } from '@angular/core';
import { Router } from  '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  appMenuOpen: boolean = false;

  constructor(private router: Router) {}

  goToRoute(route) {
    this.router.navigate([`${route}`]);
  }

  toggleMenu() {
    this.appMenuOpen = !this.appMenuOpen;
  }
}
