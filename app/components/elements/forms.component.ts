import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-forms',
  templateUrl: 'forms.component.html'
})

export class FormsComponent {
  description = [{
    add: 'has-error',
    desc: 'Error state applied to inputs or textarea.'
  }];
}
