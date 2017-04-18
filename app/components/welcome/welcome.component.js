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
var noaa_api_service_1 = require('../../services/noaa-api.service');
var WelcomeComponent = (function () {
    function WelcomeComponent(noaa) {
        this.noaa = noaa;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        // this.getData();
    };
    WelcomeComponent.prototype.getData = function () {
        this.noaa
            .getData()
            .then(function (data) {
            console.warn('DATA', data);
        });
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-welcome',
            templateUrl: 'welcome.component.html',
            providers: [noaa_api_service_1.NoaaService]
        }), 
        __metadata('design:paramtypes', [noaa_api_service_1.NoaaService])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
