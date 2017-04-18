import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-the-grid',
  templateUrl: 'the-grid.component.html'
})
export class TheGridComponent implements OnInit {
  isOpen: boolean = true;
  itemEditor: boolean = false;
  columns: any = [];
  rows: any = [];
  gridItem: any = [];
  itemColumn: any = '1 / span 2';
  itemRow: any = '1 / span 2';
  justifyItem: any = 'stretch';
  alignItem: any = 'stretch';
  justifyContent: any = 'stretch';
  alignContent: any = 'stretch';
  gap: any = {
    column: '10px',
    row: '10px'
  };
  bg: any = 'blue';
  newCol: any = {
    name: '',
    col: 'auto',
  };
  newRow: any = {
    name: '',
    row: 'auto'
  };
  // same values for justify and align ITEMS
  justifyItems = ['start', 'end', 'center', 'stretch'];
  // same values for justify and align CONTENT
  justifyContents = ['start', 'end', 'center', 'stretch', 'space-around', 'space-between', 'space-evenly'];

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

  ngOnInit() {
    this.gridItem = new Array(2);
  }

  toggleGridEditor() {
    this.isOpen = !this.isOpen;
  }

  toggleItemEditor() {
    this.itemEditor = !this.itemEditor;
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
      'grid-template-columns': `${this.tempColumns}`,
      'grid-template-rows': `${this.tempRows}`,
      'grid-column-gap': `${this.gap.column}`,
      'grid-row-gap': `${this.gap.row}`,
      'justify-items': `${this.justifyItem}`,
      'align-items': `${this.alignItem}`,
      'justify-content': `${this.justifyContent}`,
      'align-content': `${this.alignContent}`
    }
  }

  theItems() {
    return {
      'grid-column': `${this.itemColumn}`,
      'grid-row': `${this.itemRow}`
    }
  }

  applyGridChanges(c, r, gp) {
    this.setTemplateColumns(c.value);
    this.setTemplateRows(r.value);
    this.setGridGap(gp);
    var c = this.tempColumns.split(" ") as any;
    var r = this.tempRows.split(" ") as any;
    var a = new Array(c.length * r.length);
    this.gridItem = a;
  }

  applyItemChanges(item) {
    var i = item.form.value;
    this.itemColumn = i['item-column'];
    this.itemRow = i['item-row'];
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

  setJustifyItems(e) {
    this.justifyItem = e;
  }

  setAlignItems(e) {
    this.alignItem = e;
  }

  setJustifyContent(e) {
    this.justifyContent = e;
  }

  setAlignContent(e) {
    this.alignContent = e;
  }

  submit(v) {
    console.warn('Val submitted', v);
  }
}
