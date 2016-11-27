import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-elements',
  templateUrl: 'elements.component.html'
})

export class ElementsComponent {
  elements = [{
    name: 'buttons'
  }, {
    name: 'forms'
  }, {
    name: 'tips'
  }, {
    name: 'progress bar'
  }, {
    name: 'pills'
  }];
}
