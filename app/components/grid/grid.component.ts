import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-grid',
  templateUrl: 'grid.component.html'
})
export class GridComponent {
  description = [{
    add: 'flex',
    desc: 'Base class'
  }, {
    add: 'flex__i--{size}-{col}',
    desc: 'Flex item'
  }, {
    add: 'flex__o--{size}-{col}',
    desc: 'Flex offset'
  }, {
    add: 'flex--{size}-start',
    desc: 'Aligns using justify-content:flex-start'
  }, {
    add: 'flex--{size}-center',
    desc: 'Aligns using justify-content:center'
  }, {
    add: 'flex--{size}-end',
    desc: 'Aligns using justify-content:flex-end'
  }, {
    add: 'flex--{size}-around',
    desc: 'Aligns using justify-content:space-around'
  }, {
    add: 'flex--{size}-between',
    desc: 'Aligns using justify-content:space-between'
  }, {
    add: 'flex--{size}-top',
    desc: 'Aligns using align-items:flex-start'
  }, {
    add: 'flex--{size}-middle',
    desc: 'Aligns using align-items:center'
  }, {
    add: 'flex--{size}-bottom',
    desc: 'Aligns using align-items:flex-end'
  }];
}
