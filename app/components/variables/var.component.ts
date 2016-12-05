import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-var',
  templateUrl: 'var.component.html'
})

export class VarComponent {
  coloring = [{
    name: '$brand-primary',
    class: 'pr',
    color: '#1fa2ed'
  }, {
    name: '$brand-secondary',
    class: 'sd',
    color: '#2555de'
  }, {
    name: '$brand-tertiary',
    class: 'tr',
    color: '#e4ec0e'
  }, {
    name: '$brand-grey1',
    class: 'g1',
    color: '#000'
  }, {
    name: '$brand-grey2',
    class: 'g2',
    color: '#333'
  }, {
    name: '$brand-grey3',
    class: 'g3',
    color: '#666'
  }]
}
