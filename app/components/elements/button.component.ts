import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-button',
  templateUrl: 'button.component.html'
})

export class ButtonComponent {
  description = [{
    add: 'spx-btn',
    desc: 'Base class'
  }, {
    add: 'spx-btn--material',
    desc: 'Creates a material button'
  }, {
    add: 'spx-btn--icon',
    desc: 'Creates a icon button'
  }, {
    add: 'spx-btn--circle',
    desc: 'Creates a circular button'
  }, {
    add: '[ATTR]: data-icon',
    desc: 'Injects ligature icon into ::before. Use with material or icon modifiers'
  }]
}
