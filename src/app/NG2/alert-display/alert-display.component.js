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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var alert_service_1 = require("../../services/alert-service");
var AlertDisplayComponent = (function () {
    function AlertDisplayComponent(alertService) {
        this.alertService = alertService;
        this.description = [{
                add: '[tileData]',
                desc: '[tileData] object, see properties below'
            }];
    }
    AlertDisplayComponent.prototype.addAlert = function () {
        this.alertService.addAlert('Fail alert message', 'error');
    };
    AlertDisplayComponent.prototype.clearAll = function () {
        this.alertService.clearSubject();
    };
    return AlertDisplayComponent;
}());
AlertDisplayComponent = __decorate([
    core_1.Component({
        selector: 'app-alert-display',
        templateUrl: 'app/NG2/alert-display/alert-display.component.html'
    }),
    __metadata("design:paramtypes", [alert_service_1.AlertService])
], AlertDisplayComponent);
exports.AlertDisplayComponent = AlertDisplayComponent;
