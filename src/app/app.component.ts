import { Component } from '@angular/core';
import { Router, NavigationStart } from  '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  appMenuOpen: boolean = false;
  heroWelcome: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        if (e.url === '/welcome') {
          this.heroWelcome = true;
        } else {
          this.heroWelcome = false;
        }
      }
    });
  }

  goToRoute(route) {
    this.router.navigate([`${route}`]);
    this.appMenuOpen = false;
  }

  toggleMenu() {
    this.appMenuOpen = !this.appMenuOpen;
  }
}
