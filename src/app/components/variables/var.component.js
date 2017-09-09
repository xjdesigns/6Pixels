"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VarComponent = (function () {
    function VarComponent() {
        this.hoveredColor = 'Hover a color for information';
        this.coloring = [{
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
        this.greyscale = [{
                name: '$black',
                color: '#000'
            }, {
                name: '$grey-d1',
                color: '#333'
            }, {
                name: '$grey-l1',
                color: '#ccc'
            }, {
                name: '$white',
                color: '#fff'
            }];
    }
    VarComponent.prototype.mouseOverColor = function (e, i) {
        this.hoveredColor = "Sass Var: " + e + " | Hexidecimal: " + i;
    };
    VarComponent.prototype.mouseOutColor = function () {
        this.hoveredColor = 'Hover a color for information';
    };
    return VarComponent;
}());
VarComponent = __decorate([
    core_1.Component({
        selector: 'app-var',
        templateUrl: 'app/components/variables/var.component.html'
    })
], VarComponent);
exports.VarComponent = VarComponent;
