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
var firebase_service_1 = require("../../services/firebase.service");
var _ = require("lodash");
var AlertDisplayComponent = (function () {
    function AlertDisplayComponent(alertService, ffbs) {
        this.alertService = alertService;
        this.ffbs = ffbs;
        this.description = [{
                add: '[tileData]',
                desc: '[tileData] object, see properties below'
            }];
        this.ffbs.init();
        console.warn('lodash', _);
    }
    AlertDisplayComponent.prototype.ngOnInit = function () {
        this.ffbs.getData().subscribe(function (data) {
            console.warn('sub data', data);
        });
        var i = _.join(['a', 'b', 'c'], '~');
        console.warn('i', i);
    };
    AlertDisplayComponent.prototype.addAlert = function () {
        this.alertService.addAlert('Fail alert message', 'error');
    };
    AlertDisplayComponent.prototype.clearAll = function () {
        this.alertService.clearSubject();
    };
    AlertDisplayComponent.prototype.getUser = function (uuid) {
        this.ffbs.writeUserData(1225, 'tony jacobson', 'jason@jason.com', 'none');
    };
    return AlertDisplayComponent;
}());
AlertDisplayComponent = __decorate([
    core_1.Component({
        selector: 'app-alert-display',
        templateUrl: 'app/NG2/alert-display/alert-display.component.html',
        providers: [firebase_service_1.FirebaseService]
    }),
    __metadata("design:paramtypes", [alert_service_1.AlertService, firebase_service_1.FirebaseService])
], AlertDisplayComponent);
exports.AlertDisplayComponent = AlertDisplayComponent;
