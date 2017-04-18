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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
        // api.openweathermap.org/data/2.5/weather
        this.weatherURL = "http://api.openweathermap.org/data/2.5/weather";
    }
    WeatherService.prototype.getWeather = function () {
        var params = new http_1.URLSearchParams();
        params.set('id', "5022025");
        params.set('units', "imperial"); // returns fahrenheit
        params.set('APPID', "d49417e4e28b3397686c99a517d86567");
        return this.http.get(this.weatherURL, { search: params })
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function () {
            alert('Oops no data was found');
        });
    };
    return WeatherService;
}());
WeatherService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], WeatherService);
exports.WeatherService = WeatherService;
