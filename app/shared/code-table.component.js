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
var CodeTableComponent = (function () {
    function CodeTableComponent() {
        this.description = [];
        this.isOpen = false;
    }
    CodeTableComponent.prototype.ngOnInit = function () {
        this.description = this.DataCode;
    };
    CodeTableComponent.prototype.toggleTable = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        core_1.Input('data'), 
        __metadata('design:type', Object)
    ], CodeTableComponent.prototype, "DataCode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CodeTableComponent.prototype, "isOpen", void 0);
    CodeTableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-code-table',
            templateUrl: 'code-table.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CodeTableComponent);
    return CodeTableComponent;
}());
exports.CodeTableComponent = CodeTableComponent;
