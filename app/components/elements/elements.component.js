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
var ElementsComponent = (function () {
    function ElementsComponent() {
        this.frontActive = false;
        this.buttonActive = false;
        this.elements = [{
                name: 'buttons'
            }, {
                name: 'forms'
            }, {
                name: 'tips'
            }, {
                name: 'progress bar'
            }, {
                name: 'pills'
            }];
    }
    ElementsComponent.prototype.onDocScroll = function (ev) {
        var point = ev.target.body.scrollTop;
        if (point >= 10 && point <= 600) {
            this.frontActive = true;
        }
        else {
            this.frontActive = false;
        }
    };
    ElementsComponent.prototype.activate = function (arg) {
        switch (arg) {
            case 'button':
                this.buttonActive = true;
                break;
            default:
                this.buttonActive = false;
        }
    };
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ElementsComponent.prototype, "onDocScroll", null);
    ElementsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-elements',
            templateUrl: 'elements.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ElementsComponent);
    return ElementsComponent;
}());
exports.ElementsComponent = ElementsComponent;
