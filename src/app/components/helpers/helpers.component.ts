import { Component } from '@angular/core';

@Component({
  selector: 'app-helpers',
  templateUrl: 'app/components/helpers/helpers.component.html'
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
  }, {
    add: 'spx-click-shield',
    desc: 'Adds an overlay using fixed positioning, to avoid DOM clutter with event handlers to a simple method of grabbing external clicks. DO NOT WRAP anything inside of this. Toggle the .is-open class on the click shield.'
  }];
}
