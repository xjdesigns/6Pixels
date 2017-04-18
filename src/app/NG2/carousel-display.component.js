"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CarouselDisplayComponent = (function () {
    function CarouselDisplayComponent() {
        // images for display with carousel
        this.Images = [{
                AlternateImages: [{
                        image: 'https://images.unsplash.com/photo-1463680821868-35b3a7410f06?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop='
                    }, {
                        image: 'https://images.unsplash.com/photo-1489674315798-8908c1f456d2?dpr=1&auto=format&fit=crop&w=1500&h=844&q=80&cs=tinysrgb&crop='
                    }, {
                        image: 'https://images.unsplash.com/photo-1414170695976-59c0463bd11d?dpr=1&auto=format&fit=crop&w=1500&h=913&q=80&cs=tinysrgb&crop='
                    }, {
                        image: 'https://images.unsplash.com/photo-1444831953286-fe8d05bb3334?dpr=1&auto=format&fit=crop&w=1500&h=1125&q=80&cs=tinysrgb&crop='
                    }],
                PrimaryImage: [{
                        image: 'https://images.unsplash.com/photo-1471622710663-8f18c20d6ee3?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop='
                    }]
            }];
        this.description = [{
                add: '[images]',
                desc: 'Array of objects which contains array of objects, default is Images.AlternateImages & Images.PrimaryImage'
            }, {
                add: '[primary]',
                desc: 'Optional value for your Primary Image.'
            }, {
                add: '[alternate]',
                desc: 'Optional value for your Alternate Images.'
            }];
    }
    return CarouselDisplayComponent;
}());
CarouselDisplayComponent = __decorate([
    core_1.Component({
        selector: 'app-carousel-display',
        templateUrl: 'app/NG2/carousel-display.component.html'
    })
], CarouselDisplayComponent);
exports.CarouselDisplayComponent = CarouselDisplayComponent;
