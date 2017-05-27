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
var router_1 = require("@angular/router");
var TileComponent = (function () {
    function TileComponent(router) {
        this.router = router;
        this.isFavorited = false;
        this.tileData = {
            title: 'Item',
            desc: 'description text',
            baseHref: 'http://target.com',
            favorite: this.isFavorited,
            isFave: false,
            isIcon: false,
            icon: 'check',
            actions: [{
                    title: 'One',
                    href: 'http://google.com'
                }, {
                    title: 'Two',
                    href: 'http://google.com'
                }]
        };
        this.onChange = new core_1.EventEmitter();
        console.warn('construtor', this);
    }
    TileComponent.prototype.baseAction = function () {
        // starts with '/' means route
        var route = /^\//g.test(this.tileData.baseHref);
        if (route) {
            this.router.navigate(['/ng2']);
        }
        else {
            window.open(this.tileData.baseHref, '_blank');
        }
    };
    TileComponent.prototype.setAsFavorite = function (e) {
        e.stopPropagation();
        this.isFavorited = !this.isFavorited;
        this.onChange.emit(this.tileData);
    };
    return TileComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TileComponent.prototype, "tileData", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TileComponent.prototype, "onChange", void 0);
TileComponent = __decorate([
    core_1.Component({
        selector: 'app-tile',
        templateUrl: 'app/components/components/tile/tile.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], TileComponent);
exports.TileComponent = TileComponent;
