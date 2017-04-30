import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: 'app/NG2/data-table.component.html'
})
export class DataTableComponent {
  // data = [];
  list = [];
  final = [];
  allSelected: boolean = false;
  hidden = 0;
  // default if number is set in head data
  numberFilter = ['equals', 'not equal', 'less than', 'less than or equal', 'greater than', 'greater than or equals'];

  head = [{
    name: 'First Name',
    filters: [],
    sort: '01',
    type: 'string'
  }, {
    name: 'Last name',
    filters: [],
    sort: '01',
    type: 'string'
  }, {
    name: 'Age',
    filters: [],
    sort: '01',
    type: 'number'
  }];

  data = [{ // remove once passing and set to blank
    name: "Jason",
    lName: 'Jacobson',
    age: '33'
  }, { // remove once passing and set to blank
    name: "Frank",
    lName: 'Wright',
    age: '20'
  }, { // remove once passing and set to blank
    name: "John",
    lName: 'Doe',
    age: '19'
  }];

// need thead data

// need tbody data

// need sorting

// need filtering / fuzzy searching
// numbers auto set to the predefined options
// else pass a list of vals to filter

// need row selection

// possibly pass icons or images... star rating
// needed as we need image displays and triggers for
// displaying with a modal


  constructor() {}

  ngOnInit() {
    this.list = this.data.map(d => {
      d['selected'] = false;
      return d;
    });
  }

  selectAll() {
    if (this.allSelected) {
      this.final = [];
      this.allSelected = false;
      this.setChecked(this.allSelected);
    } else {
      this.list.forEach((d) => {
        this.final.push(d);
      });
      this.allSelected = true;
      this.setChecked(this.allSelected);
    }
  }

  // checkboxes acting odd, I need to look at the data
  setRow(i, dt) {
    this.list.forEach((d, index) => {
      // match first, the splice it off at its indexOf
      if (dt === d) {
        if (this.final.indexOf(dt) !== -1) {
          d['selected'] = false;
          this.final.splice(this.final.indexOf(dt), 1);
        }
      }
      if (i === index) {
        d['selected'] = true;
        this.final.push(d);
      }
    });
    // console.warn('set row data', this.final);
    // console.warn(this.list);
  }

  setChecked(bool) {
    console.warn(bool);
    this.list.forEach(d => {
      d['selected'] = bool;
    });
    console.warn(this.data);
  }

  sort() {
    this.list.sort((a,b) => {
      if(a.name < b.name) {
        return -1
      }
      if(a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }
  sortNumber() {
    this.list.sort((a,b) => {
      return Number(a.age) - Number(b.age);
    });
  }

  handle(i) {
    console.warn('i', i);
    this.hidden = i + 1;
  }
}
