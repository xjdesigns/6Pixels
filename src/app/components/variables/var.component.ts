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
    name: '$greyscale-01',
    color: '#000'
  }, {
    name: '$greyscale-02',
    color: '#1a1a1a'
  }, {
    name: '$greyscale-03',
    color: '#333'
  }, {
    name: '$greyscale-04',
    color: '#4d4d4d'
  }, {
    name: '$greyscale-05',
    color: '#666'
  }, {
    name: '$greyscale-06',
    color: '#808080'
  }, {
    name: '$greyscale-07',
    color: '#999'
  }, {
    name: '$greyscale-08',
    color: '#b3b3b3'
  }, {
    name: '$greyscale-09',
    color: '#ccc'
  }, {
    name: '$greyscale-10',
    color: '#e5e5e5'
  }, {
    name: '$greyscale-11',
    color: '#fff'
  }];

  mouseOverColor(e, i) {
    this.hoveredColor = `Sass Var: ${e} | Hexidecimal: ${i}`;
  }
  mouseOutColor() {
    this.hoveredColor = 'Hover a color for information';
  }
}
