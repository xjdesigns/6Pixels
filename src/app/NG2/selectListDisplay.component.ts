import { Component } from '@angular/core';

@Component({
  selector: 'app-selectlist-display',
  templateUrl: 'app/NG2/selectListDisplay.component.html'
})

export class SelectlistDisplayComponent {
  selectedListString = '123123433';
  selectedListArray = [{
    name: 'one',
    uuid: '123123432'
  }, {
    name: 'two',
    uuid: '123123433'
  }];

  list = [{
    name: 'one',
    uuid: '123123432'
  }, {
    name: 'two',
    uuid: '123123433'
  }, {
    name: 'three',
    uuid: '123123434'
  }, {
    name: 'four',
    uuid: '123123435'
  }, {
    name: 'five',
    uuid: '123123436'
  }]

  description = [{
    add: '*ngIf',
    desc: 'Conditional check for [data] and currentSelection'
  }, {
    add: '[data]',
    desc: 'Array of objects'
  }, {
    add: '[multiple]',
    desc: 'true or false, for multi select'
  }, {
    add: '[search]',
    desc: 'true or false, for searching the [data]'
  }, {
    add: '[valueProp]',
    desc: 'string value of value prop being passed in [data]'
  }, {
    add: '[nameProp]',
    desc: 'string value of name prop being passed in [data]'
  }, {
    add: '[outputType]',
    desc: 'output can be array or string'
  }, {
    add: '[currentSelection]',
    desc: 'if mulitple is true, this MUST be an array of objects with matching properties. If false MUST be a string'
  }, {
    add: '[onChange]',
    desc: 'method to be called when selection is made, $event is value passed by Angular'
  }];

  selectList(val) {
    console.log('This is the event from the select list.', val);
  }
}
