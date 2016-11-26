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
                name: '$brand-grey1',
                class: 'g1',
                color: '#000'
            }, {
                name: '$brand-grey2',
                class: 'g2',
                color: '#333'
            }, {
                name: '$brand-grey3',
                class: 'g3',
                color: '#666'
            }];
    }
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
