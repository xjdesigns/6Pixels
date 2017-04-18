import { Component } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: 'app/components/components/components.component.html'
})

export class ComponentsComponent {
  elements = [{
    name: 'tips'
  }, {
    name: 'media object'
  }];
}
