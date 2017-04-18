import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

const NO_SELECTION_ID = 'none';

@Component({
  selector: 'app-selectlist',
  templateUrl: 'app/NG2/selectlist.component.html'
})
export class SelectlistComponent implements OnInit {
  list: any[] = [];
  selected: any[] = [];
  selectedID: string = '';
  isOpen: boolean = false;

  @Input() data: any[] = [];
  @Input() multiple: boolean = false;
  @Input() search: boolean = false;
  @Input() outputType: string = 'array';
  @Input() valueProp: string = 'uuid';
  @Input() nameProp: string = 'name';
  @Input() currentSelection: any[] = [];
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  // USE: supply the <select-list> with an Array[] as [data]
  // name and uuid are default properties, change with nameProp or valueProp
  // this will return you a new array of uuids as default
  // attr[outputType] can return string, default is array

  ngOnInit() {
    // set default of false to all
    this.list = this.data.map(d => {
      return Object.assign({}, d, { selected: false });
    });
    // initialize
    this.initSelect();
  }

  toggleList() {
    this.isOpen = !this.isOpen;
  }

  initSelect() {
    // if supplied a string set as an array for checks
    // strings and arrays supported
    if (this.currentSelection === null) {
      // if null set to 'none'
      this.selectedID = NO_SELECTION_ID;
      this.currentSelection = [
        {[this.valueProp]: NO_SELECTION_ID}
      ];
    }

    if (typeof this.currentSelection === 'string') {
      // if string set the arrays object to the valueProp
      this.setDisplaySelected(this.currentSelection);
      this.currentSelection = [
        {[this.valueProp]: this.currentSelection}
      ];
    }
    let init = this.currentSelection.map(c => {
      return c[this.valueProp];
    });
    this.setSelected(init);
  }

  selectElement(e) {
    if (e === NO_SELECTION_ID) {
      this.selected = [];
      this.setSelected(e);
      this.selectedID = e;
      return;
    }
    if (this.multiple) {
      let index = this.selected.indexOf(e);

      if (index === -1) {
        this.selected.push(e);
      } else {
        this.selected.splice(index, 1);
      }
    } else {
      this.selected = [e];
      this.setDisplaySelected(e);
    }
    this.valSet(this.selected);
    this.setSelected(this.selected);
  }

  setDisplaySelected(e) {
    if (this.multiple) {
      console.warn('Multiple selects do not need display');
      return;
    }
    let sel = this.list.filter(l => {
      return e === l[this.valueProp];
    });

    this.selectedID = sel[0][this.nameProp];
  }

  setSelected(id) {
    if (!this.list) {
      console.error('No List Provided');
      return;
    }

    this.list.map(d => {
      let cc = id.indexOf(d[this.valueProp]);
      if (this.multiple && cc > -1) {
        d.selected = true;
      } else if (this.multiple && cc === -1) {
        d.selected = false;
      } else {
        d.selected = d[this.valueProp] === id[0];
      }
      return d;
    });
  }

  valSet(res) {
    // output as 'string' return the string
    // default is 'array'
    if (this.outputType === 'string') {
      res = res.join();
    }
    this.onChange.emit(res);
  }

  searchTerm(e) {
    let val = e.target.value;
    if (val.length === 0) {
      this.list = this.data;
      return;
    }
    this.list = this.data.filter(d => {
      const v = d[this.nameProp].toLowerCase();
      return v.indexOf(val.toLowerCase()) !== -1;
    });
  }
}
