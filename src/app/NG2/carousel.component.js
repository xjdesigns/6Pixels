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
var CarouselComponent = (function () {
    function CarouselComponent() {
        this.imgs = {};
        this.imgWidth = 63; // match the image widths, we know from our styling
        this.slide = 0;
        this.isOpen = false;
        this.currentSlide = 0;
        this.offset = 0;
        this.currentImg = '';
        this.altImgs = [];
        this.length = 0;
        this.prevIsDisabled = false;
        this.nextIsDisabled = false;
        this.images = {};
        this.primary = 'PrimaryImage';
        this.alternate = 'AlternateImages';
    }
    CarouselComponent.prototype.ngOnInit = function () {
        this.imgs = this.images[0];
        this.currentImg = this.imgs[this.primary][0].image;
        this.altImgs = this.addPrimaryToAlt(this.imgs[this.alternate], this.imgs[this.primary][0]);
        this.length = this.altImgs.length;
        this.isDisabled();
    };
    CarouselComponent.prototype.addPrimaryToAlt = function (o, n) {
        o.unshift(n);
        return o;
    };
    CarouselComponent.prototype.selectImage = function (idx) {
        this.currentSlide = idx;
        this.currentImg = this.altImgs[this.currentSlide].image;
    };
    CarouselComponent.prototype.nextImage = function () {
        if (this.slide === (this.length - 3)) {
            return;
        }
        this.offset = this.offset + this.imgWidth;
        this.slide++;
        this.isDisabled();
    };
    CarouselComponent.prototype.previousImage = function () {
        if (this.slide === 0) {
            return;
        }
        this.offset = this.offset - this.imgWidth;
        this.slide--;
        this.isDisabled();
    };
    CarouselComponent.prototype.openZoomModal = function () {
        this.isOpen = true;
    };
    CarouselComponent.prototype.closeModal = function () {
        this.isOpen = false;
    };
    CarouselComponent.prototype.isDisabled = function () {
        this.prevIsDisabled = (this.length - this.slide) === this.length ? true : false;
        this.nextIsDisabled = (this.length - this.slide) === 3 ? true : false;
    };
    return CarouselComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CarouselComponent.prototype, "images", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CarouselComponent.prototype, "primary", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CarouselComponent.prototype, "alternate", void 0);
CarouselComponent = __decorate([
    core_1.Component({
        selector: 'app-carousel',
        templateUrl: 'app/NG2/carousel.component.html'
    })
], CarouselComponent);
exports.CarouselComponent = CarouselComponent;
