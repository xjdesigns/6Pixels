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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var NoaaService = (function () {
    function NoaaService(http) {
        this.http = http;
        this.noaaUrl = 'https://www.ncdc.noaa.gov/cdo-web/api/v2/locations/ZIP:55448';
        this.tempUrl = 'https://www.ncdc.noaa.gov/cdo-web/api/v2/datatypes?locationid=ZIP:55448&datacategoryid=TEMP';
        this.token = 'HaCICNJofAcIyUruncHUBNsYheJdeECh';
    }
    NoaaService.prototype.getData = function () {
        var headers = new http_1.Headers({ 'token': this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.tempUrl, options)
            .toPromise()
            .then(function (response) {
            console.warn('Good', response.json());
            return response.json();
        })
            .catch(function () {
            console.error('You Fail');
        });
    };
    NoaaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NoaaService);
    return NoaaService;
}());
exports.NoaaService = NoaaService;
