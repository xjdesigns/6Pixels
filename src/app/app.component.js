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
var AppComponent = (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.appMenuOpen = false;
        this.heroWelcome = true;
        this.isOffset = false;
        this.router.events.subscribe(function (e) {
            if (e instanceof router_1.NavigationStart) {
                if (e.url === '/welcome') {
                    _this.heroWelcome = true;
                }
                else {
                    _this.heroWelcome = false;
                }
            }
        });
        // window.addEventListener('scroll', () => {
        //   this.isOffset = window.pageYOffset > 30 ? true : false;
        // });
    }
    AppComponent.prototype.goToRoute = function (route) {
        this.router.navigate(["" + route]);
        this.appMenuOpen = false;
    };
    AppComponent.prototype.toggleMenu = function () {
        this.appMenuOpen = !this.appMenuOpen;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
