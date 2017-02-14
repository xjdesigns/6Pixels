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
var unsplash_service_1 = require('../../services/unsplash.service');
var ImageComponent = (function () {
    function ImageComponent(unsplash) {
        this.unsplash = unsplash;
        this.photos = [];
        this.img01 = 'https://images.unsplash.com/photo-1475727946784-2890c8fdb9c8?dpr=2&auto=format&fit=crop&w=1500&h=985&q=80&cs=tinysrgb&crop=';
    }
    ImageComponent.prototype.ngOnInit = function () {
        this.getPhotos();
    };
    ImageComponent.prototype.getPhotos = function () {
        var _this = this;
        this.unsplash
            .getPhotos()
            .then(function (photos) {
            console.warn('photos::', photos);
            _this.photos = photos;
        });
    };
    ImageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-image',
            templateUrl: 'image.component.html',
            providers: [unsplash_service_1.UnsplashService]
        }), 
        __metadata('design:paramtypes', [unsplash_service_1.UnsplashService])
    ], ImageComponent);
    return ImageComponent;
}());
exports.ImageComponent = ImageComponent;
