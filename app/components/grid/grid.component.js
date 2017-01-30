"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var GridComponent = (function () {
    function GridComponent() {
        this.description = [{
                add: 'flex',
                desc: 'Base class'
            }, {
                add: 'flex__i--{size}',
                desc: 'Flex item'
            }, {
                add: 'flex__o--{size}',
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
    return GridComponent;
}());
GridComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-grid',
        templateUrl: 'grid.component.html'
    })
], GridComponent);
exports.GridComponent = GridComponent;
