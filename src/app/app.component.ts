import { Component } from '@angular/core';
import { Router, NavigationStart } from  '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  appMenuOpen: boolean = false;
  heroWelcome: boolean = true;
  isOffset: boolean = false;
  innerIsOpen: boolean = false;
  activeNav: string = 'welcome';
  // TODO: add routes and a loop, need nesting of menus as we break it out
  routes: { name:string, routes:[any] }[] = [{
    name: 'Elements',
    routes: [{
      name: 'Buttons',
      path: '/elements'
    }, {
      name: 'Forms',
      path: '/elements'
    }]
  }, {
    name: 'Components',
    routes: [{
      name: 'Components',
      path: '/components'
    }]
  }, {
    name: 'Helpers',
    routes: [{
      name: 'helpers',
      path: '/helpers'
    }]
  }, {
    name: 'NG2',
    routes: [{
      name: 'ng2',
      path: '/ng2'
    }]
  }];

  constructor(private router: Router) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        if (e.url === '/welcome') {
          this.heroWelcome = true;
        } else {
          this.heroWelcome = false;
        }
        this.appMenuOpen = false;
      }
    });
  }

  toggleMenu() {
    this.appMenuOpen = !this.appMenuOpen;
  }

  toggleNav(e) {
    console.warn(e);
    this.activeNav = this.activeNav === e ? '' : e;
  }
}
