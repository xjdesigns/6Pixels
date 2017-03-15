"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
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
                name: '$greyscale-01',
                color: '#000'
            }, {
                name: '$greyscale-02',
                color: '#1a1a1a'
            }, {
                name: '$greyscale-03',
                color: '#333'
            }, {
                name: '$greyscale-04',
                color: '#4d4d4d'
            }, {
                name: '$greyscale-05',
                color: '#666'
            }, {
                name: '$greyscale-06',
                color: '#808080'
            }, {
                name: '$greyscale-07',
                color: '#999'
            }, {
                name: '$greyscale-08',
                color: '#b3b3b3'
            }, {
                name: '$greyscale-09',
                color: '#ccc'
            }, {
                name: '$greyscale-10',
                color: '#e5e5e5'
            }, {
                name: '$greyscale-11',
                color: '#fff'
            }];
    }
    VarComponent.prototype.mouseOverColor = function (e, i) {
        this.hoveredColor = e + " | " + i;
    };
    VarComponent.prototype.mouseOutColor = function () {
        this.hoveredColor = 'Hover a color for information';
    };
    VarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-var',
            templateUrl: 'var.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], VarComponent);
    return VarComponent;
}());
exports.VarComponent = VarComponent;
