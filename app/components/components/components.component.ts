import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-components',
  templateUrl: 'components.component.html'
})

export class ComponentsComponent {
  elements = [{
    name: 'tips'
  }, {
    name: 'media object'
  }];
}
