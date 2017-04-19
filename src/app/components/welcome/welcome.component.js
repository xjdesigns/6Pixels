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
var weather_service_1 = require("../../services/weather.service");
var WelcomeComponent = (function () {
    function WelcomeComponent(w) {
        this.w = w;
        this.weather = {};
        this.temperature = '0';
        this.wind = '';
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        // this.getData();
    };
    WelcomeComponent.prototype.getData = function () {
        var _this = this;
        this.w
            .getWeather()
            .then(function (weather) {
            console.warn('weather::', weather);
            _this.weather = weather;
            _this.displayWeatherData(weather);
        });
    };
    WelcomeComponent.prototype.displayWeatherData = function (d) {
        var kel = d.main.temp.toString();
        this.temperature = kel.split(".", 1);
        this.wind = d.wind.speed;
    };
    WelcomeComponent.prototype.convertKelvinToFar = function (kelvinValue) {
        return ((kelvinValue - 273.15) * 9 / 5) + 32;
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    core_1.Component({
        selector: 'app-welcome',
        templateUrl: 'app/components/welcome/welcome.component.html',
        providers: [weather_service_1.WeatherService]
    }),
    __metadata("design:paramtypes", [weather_service_1.WeatherService])
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
