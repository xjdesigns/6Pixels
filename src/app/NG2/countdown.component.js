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
var CountdownComponent = (function () {
    function CountdownComponent() {
        this.date = '2017-03-03';
        this.timeRemaining = {
            total: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }
    CountdownComponent.prototype.ngOnInit = function () {
        this.initializeClock(this.date);
    };
    CountdownComponent.prototype.initializeClock = function (endTime) {
        var _this = this;
        var timeInterval = setInterval(function () {
            _this.timeRemaining = calcRemainingTime(endTime);
            if (_this.timeRemaining.total <= 0) {
                clearInterval(timeInterval);
            }
        }, 1000);
    };
    return CountdownComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CountdownComponent.prototype, "date", void 0);
CountdownComponent = __decorate([
    core_1.Component({
        selector: 'app-countdown',
        templateUrl: 'app/NG2/countdown.component.html'
    })
], CountdownComponent);
exports.CountdownComponent = CountdownComponent;
function calcRemainingTime(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date().toString());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}
