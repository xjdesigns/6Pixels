import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-the-grid',
  templateUrl: 'the-grid.component.html'
})
export class TheGridComponent {
  columns = [];
  rows = [];
  gridItem = [];
  gap = {
    column: '10px',
    row: '10px'
  };
  bg = 'blue';
  newCol = {
    name: '',
    col: 'auto',
  };
  newRow = {
    name: '',
    row: 'auto'
  };

  tempColumns = 'auto';
  tempRows = 'auto';

  constructor() {
    this.columns = [{
      name: '0',
      col: 'auto'
    }, {
      name: '1',
      col: 'auto'
    }];
    this.rows = [{
      name: '0',
      row: 'auto'
    }, {
      name: '1',
      row: 'auto'
    }];
  }

  addCol() {
    this.newCol.name = this.columns.length + 1;
    this.columns.push(this.newCol);
  }

  addRow() {
    this.newRow.name = this.rows.length + 1;
    this.rows.push(this.newRow);
  }

  theGrid() {
    return {
      'display': 'grid',
      'grid-template-columns': `${this.tempColumns}`;
      'grid-template-rows': `${this.tempRows}`;
      'grid-column-gap': `${this.gap.column}`;
      'grid-row-gap': `${this.gap.row}`;
    }
  }

  applyGridChanges(c, r, gp) {
    this.setTemplateColumns(c.value);
    this.setTemplateRows(r.value);
    this.setGridGap(gp);
    var c = this.tempColumns.split(" ");
    var r = this.tempRows.split(" ");
    var a = new Array(c.length * r.length);
    this.gridItem = a;
  }

  setTemplateColumns(g) {
    let cc = [];
    Object.keys(g).forEach((o) => {
      cc.push(g[o]);
    });
    this.tempColumns = cc.join(" ");
  }

  setTemplateRows(g) {
    let rr = [];
    Object.keys(g).forEach((o) => {
      rr.push(g[o]);
    });
    this.tempRows = rr.join(" ");
  }

  setGridGap(gap) {
    this.gap = {
      column: gap.value['gap-column'],
      row: gap.value['gap-row']
    }
  }

  submit(v) {
    console.warn('Val submitted', v);
  }
}
