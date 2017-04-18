import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: 'app/components/elements/forms.component.html'
})

export class FormsComponent {
  description = [{
    add: 'has-error',
    desc: 'Error state applied to inputs or textarea.'
  }];
}
