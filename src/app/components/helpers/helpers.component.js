"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HelpersComponent = (function () {
    function HelpersComponent() {
        this.description = [{
                add: 'spx-all-reset',
                desc: 'Assigns all:inital to element, resetting rules.'
            }, {
                add: 'spx-display-none',
                desc: 'Sets the element to display:none'
            }, {
                add: 'spx-is-disabled',
                desc: 'Disables element with pointer-events:none, and opacity at .4.'
            }, {
                add: 'spx-click-shield',
                desc: 'Adds an overlay using fixed positioning, to avoid DOM clutter with event handlers to a simple method of grabbing external clicks. DO NOT WRAP anything inside of this. Toggle the .is-open class on the click shield.'
            }];
    }
    return HelpersComponent;
}());
HelpersComponent = __decorate([
    core_1.Component({
        selector: 'app-helpers',
        templateUrl: 'app/components/helpers/helpers.component.html'
    })
], HelpersComponent);
exports.HelpersComponent = HelpersComponent;
