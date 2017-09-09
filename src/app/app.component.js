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
        this.innerIsOpen = false;
        this.activeNav = 'welcome';
        // TODO: add routes and a loop, need nesting of menus as we break it out
        this.routes = [{
                name: 'Elements',
                routes: [{
                        name: 'Buttons',
                        path: '/buttons'
                    }, {
                        name: 'Forms',
                        path: '/forms'
                    }, {
                        name: 'Checkbox',
                        path: '/checkbox'
                    }, {
                        name: 'Image',
                        path: '/image'
                    }, {
                        name: 'Pills',
                        path: '/pills'
                    }, {
                        name: 'Progress Bar',
                        path: '/progress-bar'
                    }, {
                        name: 'Radio',
                        path: '/radio'
                    }, {
                        name: 'Range Slider',
                        path: '/range-slider'
                    }, {
                        name: 'Select',
                        path: '/select'
                    }, {
                        name: 'Toggle',
                        path: '/toggle'
                    }, {
                        name: 'Video',
                        path: '/video'
                    }]
            }, {
                name: 'Components',
                routes: [{
                        name: 'Accordion',
                        path: '/accordion'
                    }, {
                        name: 'Breadcrumb',
                        path: '/breadcrumb'
                    }, {
                        name: 'Card',
                        path: '/card'
                    }, {
                        name: 'Flyout',
                        path: '/flyout'
                    }, {
                        name: 'Loading',
                        path: '/loading'
                    }, {
                        name: 'Media Obj',
                        path: '/media-obj'
                    }, {
                        name: 'Pagination',
                        path: '/pagination'
                    }, {
                        name: 'Tiles',
                        path: '/tiles'
                    }, {
                        name: 'Toast',
                        path: '/toast'
                    }, {
                        name: 'Tooltip',
                        path: '/tooltip'
                    }]
            }];
        var b = document.querySelector('body');
        this.router.events.subscribe(function (e) {
            if (e instanceof router_1.NavigationStart) {
                if (e.url === '/welcome') {
                    _this.heroWelcome = true;
                }
                else {
                    _this.heroWelcome = false;
                }
                _this.appMenuOpen = false;
                b.scrollTop = 0;
            }
        });
    }
    AppComponent.prototype.toggleMenu = function () {
        this.appMenuOpen = !this.appMenuOpen;
    };
    AppComponent.prototype.toggleNav = function (e) {
        console.warn(e);
        this.activeNav = this.activeNav === e ? '' : e;
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
