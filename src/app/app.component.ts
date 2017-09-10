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
      path: '/buttons'
    }, {
      name: 'Forms',
      path: '/forms'
    }, {
      name: 'Checkbox',
      path: '/checkbox'
    }, {
      name: 'Image',
      path: '/image'
    }, {
      name: 'Pills',
      path: '/pills'
    }, {
      name: 'Progress Bar',
      path: '/progress-bar'
    }, {
      name: 'Radio',
      path: '/radio'
    }, {
      name: 'Range Slider',
      path: '/range-slider'
    }, {
      name: 'Select',
      path: '/select'
    }, {
      name: 'Toggle',
      path: '/toggle'
    }, {
      name: 'Video',
      path: '/video'
    }]
  }, {
    name: 'Components',
    routes: [{
      name: 'Accordion',
      path: '/accordion'
    }, {
      name: 'Breadcrumb',
      path: '/breadcrumb'
    }, {
      name: 'Card',
      path: '/card'
    }, {
      name: 'Flyout',
      path: '/flyout'
    }, {
      name: 'Loading',
      path: '/loading'
    }, {
      name: 'Media Obj',
      path: '/media-obj'
    }, {
      name: 'Pagination',
      path: '/pagination'
    }, {
      name: 'Tiles',
      path: '/tiles'
    }, {
      name: 'Toast',
      path: '/toast'
    }, {
      name: 'Tooltip',
      path: '/tooltip'
    }]
  }];

  constructor(private router: Router) {
    let b = document.querySelector('body');

    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        if (e.url === '/welcome') {
          this.heroWelcome = true;
        } else {
          this.heroWelcome = false;
        }
        this.appMenuOpen = false;
        b.scrollTop = 0;
      }
    });

    // opts.callback();
  }

  toggleMenu() {
    this.appMenuOpen = !this.appMenuOpen;
  }

  toggleNav(e) {
    console.warn(e);
    this.activeNav = this.activeNav === e ? '' : e;
  }
}
var opts = {
  callback: jason
}
function jason(params) {
  console.warn('jason', params);
}
