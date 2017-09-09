"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ButtonComponent = (function () {
    function ButtonComponent() {
        this.description = [{
                add: 'spx-btn',
                desc: 'Base class'
            }, {
                add: 'spx-btn--sm',
                desc: 'Creates a small button'
            }, {
                add: 'spx-btn--material',
                desc: 'Creates a material button'
            }, {
                add: 'spx-btn--icon',
                desc: 'Creates a icon button'
            }, {
                add: 'spx-btn--circle',
                desc: 'Creates a circular button'
            }, {
                add: '[ATTR]: data-icon',
                desc: 'Injects ligature icon into ::before. Use with material or icon modifiers'
            }];
    }
    return ButtonComponent;
}());
ButtonComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-button',
        templateUrl: 'button.component.html'
    })
], ButtonComponent);
exports.ButtonComponent = ButtonComponent;
