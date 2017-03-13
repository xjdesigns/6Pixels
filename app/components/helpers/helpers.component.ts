import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-helpers',
  templateUrl: 'helpers.component.html'
})

export class HelpersComponent {
  description = [{
    add: 'spx-all-reset',
    desc: 'Assigns all:inital to element, resetting rules.'
  }, {
    add: 'spx-display-none',
    desc: 'Sets the element to display:none'
  }, {
    add: 'spx-is-disabled',
    desc: 'Disables element with pointer-events:none, and opacity at .4.'
  }];
}
