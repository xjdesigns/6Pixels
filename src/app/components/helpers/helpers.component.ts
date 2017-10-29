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
  }, {
    add: 'spx-pd-{value}',
    desc: 'Adds padding to all sides using 4 values. Values = 6,12,18,24'
  }, {
    add: 'spx-pd-{side}-{value}',
    desc: 'Adds padding to side specified using value. See above for values. Sides = lt,rt,tp,bt'
  }, {
    add: 'spx-mg-{value}',
    desc: 'Adds margin to all sides using 4 values. Values = 6,12,18,24'
  }, {
    add: 'spx-mg-{side}-{value}',
    desc: 'Adds margin to side specified using value. See above for values. Sides = lt,rt,tp,bt'
  }, {
    add: 'spx-ele-{value}',
    desc: 'Adds elevation to the element. Values = 1,2,3,4,5'
  }];
}
