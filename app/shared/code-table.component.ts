import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-code-table',
  templateUrl: 'code-table.component.html'
})
export class CodeTableComponent implements OnInit {
  description = [];
  @Input('data') DataCode: CodeData[];
  @Input() isOpen: boolean = false;

  ngOnInit() {
    this.description = this.DataCode;
  }

  toggleTable() {
    this.isOpen = !this.isOpen;
  }
}

export interface CodeData {
  add: string;
  desc: string;
}
