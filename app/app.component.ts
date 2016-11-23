import { Component } from '@angular/core';
import { Router } from  '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  appMenuOpen: boolean = true;

  constructor(private router: Router) {}

  goToRoute(route) {
    this.router.navigate([`${route}`]);
  }

  toggleMenu() {
    this.appMenuOpen = !this.appMenuOpen;
  }

  // title = 'Tour of Heroes';
  // heroes = HEROES;
  // selectedHero: Hero;
  //
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // };
}


// export class Hero {
//   id: number;
//   name: string;
// };
//
// const HEROES: Hero[] = [
//   { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];
