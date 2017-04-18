"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SelectlistDisplayComponent = (function () {
    function SelectlistDisplayComponent() {
        this.selectedListString = '123123433';
        this.selectedListArray = [{
                name: 'one',
                uuid: '123123432'
            }, {
                name: 'two',
                uuid: '123123433'
            }];
        this.list = [{
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
            }];
        this.description = [{
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
    }
    SelectlistDisplayComponent.prototype.selectList = function (val) {
        console.log('This is the event from the select list.', val);
    };
    return SelectlistDisplayComponent;
}());
SelectlistDisplayComponent = __decorate([
    core_1.Component({
        selector: 'app-selectlist-display',
        templateUrl: 'app/NG2/selectListDisplay.component.html'
    })
], SelectlistDisplayComponent);
exports.SelectlistDisplayComponent = SelectlistDisplayComponent;
