import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-select',
  templateUrl: 'select.component.html'
})
export class SelectComponent {
  selection: Selection[] = [{
    name: 'option 1',
    value: 1
  }, {
    name: 'option 2',
    value: 2
  }, {
    name: 'option 3',
    value: 3
  }];
}

export interface Selection {
  name: string;
  value: number;
}
