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
var alert_service_1 = require("../../../services/alert-service");
var TileComponent = (function () {
    function TileComponent(router, alS) {
        this.router = router;
        this.alS = alS;
        this.tileData = {
            title: 'Item',
            desc: 'description text',
            baseHref: 'http://target.com',
            favorite: false,
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
        this.alS.jason('error');
        // setTimeout(() => {
        //   this.alS.removeAS();
        // }, 5000);
    }
    TileComponent.prototype.baseAction = function () {
        var link = this.tileData.favorite;
        // starts with '/' means route
        var route = /^\//g.test(link);
        if (route) {
            this.router.navigate([link]);
        }
        else {
            window.open(link, '_blank');
        }
    };
    TileComponent.prototype.setAsFavorite = function (e) {
        e.stopPropagation();
        this.tileData.favorite = !this.tileData.favorite;
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
    __metadata("design:paramtypes", [router_1.Router, alert_service_1.AlertService])
], TileComponent);
exports.TileComponent = TileComponent;
