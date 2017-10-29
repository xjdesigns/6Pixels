import { Component } from '@angular/core';

@Component({
  selector: 'app-var',
  templateUrl: 'app/components/variables/var.component.html'
})

export class VarComponent {
  hoveredColor = 'Hover a color for information';
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
    name: '$brand-info',
    class: 'g1',
    color: '#04a3ff'
  }, {
    name: '$brand-success',
    class: 'g2',
    color: 'green'
  }, {
    name: '$brand-warning',
    class: 'g3',
    color: 'gold'
  }, {
    name: '$brand-error',
    class: 'g3',
    color: 'red'
  }];

  greyscale = [{
    name: '$black',
    color: '#000'
  }, {
    name: '$grey-d1',
    color: '#333'
  }, {
    name: '$grey-l1',
    color: '#ccc'
  }, {
    name: '$white',
    color: '#fff'
  }];

  mouseOverColor(e, i) {
    this.hoveredColor = `Sass Var: ${e} | Hexidecimal: ${i}`;
  }
  mouseOutColor() {
    this.hoveredColor = 'Hover a color for information';
  }
}
