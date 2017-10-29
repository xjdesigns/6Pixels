"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ToastComponent = (function () {
    function ToastComponent() {
        this.isOpen = false;
    }
    ToastComponent.prototype.toggleToast = function () {
        this.isOpen = !this.isOpen;
    };
    return ToastComponent;
}());
ToastComponent = __decorate([
    core_1.Component({
        selector: 'app-toast',
        templateUrl: 'app/components/components/toast/toast.component.html'
    })
], ToastComponent);
exports.ToastComponent = ToastComponent;
