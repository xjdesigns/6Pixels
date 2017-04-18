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
var UnsplashService = (function () {
    function UnsplashService(http) {
        this.http = http;
        this.unsplashUrl = 'https://api.unsplash.com/photos/';
    }
    UnsplashService.prototype.getPhotos = function () {
        var params = new http_1.URLSearchParams();
        params.set('client_id', "5953e9fa564ea21dd6e842143990838cd5c7bbf16d49831ab571527b70170af3");
        params.set('per_page', "60");
        return this.http.get(this.unsplashUrl, { search: params })
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function () {
            alert('Oops, I shit my pants');
        });
    };
    return UnsplashService;
}());
UnsplashService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UnsplashService);
exports.UnsplashService = UnsplashService;
