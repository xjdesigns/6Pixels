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
var alert_service_1 = require("../../../services/alert-service");
var TilesComponent = (function () {
    function TilesComponent(alS) {
        this.alS = alS;
        this.description = [{
                add: '[tileData]',
                desc: '[tileData] object, see properties below'
            }, {
                add: '.app-tile--fave',
                desc: 'Class for app-tile which shows at 50%'
            }, {
                add: '{title}: string',
                desc: 'Tile title property'
            }, {
                add: '{desc}: string',
                desc: 'Tile description property'
            }, {
                add: '{baseHref}: string',
                desc: 'Base href property, can be route or href'
            }, {
                add: '{favorite}: boolean',
                desc: 'Favorite property'
            }, {
                add: '{isIcon}: boolean',
                desc: 'isIcon property'
            }, {
                add: '{icon}: string',
                desc: 'icon property is ligature to display if isIcon is true'
            }, {
                add: '{actions[{title,href}]}: array',
                desc: 'actions property is array of objects. '
            }, {
                add: '(onChange)',
                desc: '(onChange) event is emitted when favorite is toggled, passes tileData object as $event'
            }];
        this.theTiles = [{
                title: 'Item',
                desc: 'description text',
                baseHref: 'http://target.com',
                favorite: false,
                isIcon: false,
                icon: 'check',
                actions: [{
                        title: 'One',
                        href: 'http://google.com'
                    }, {
                        title: 'Two',
                        href: 'http://google.com'
                    }]
            }, {
                title: 'Item 1',
                desc: 'description text',
                baseHref: '/ng2',
                favorite: true,
                isIcon: true,
                icon: 'check',
                actions: [{
                        title: 'One',
                        href: 'http://google.com'
                    }, {
                        title: 'Two',
                        href: 'http://google.com'
                    }]
            }, {
                title: 'Item 2',
                desc: 'description text',
                baseHref: 'http://target.com',
                favorite: false,
                isIcon: false,
                icon: 'check',
                actions: [{
                        title: 'One',
                        href: 'http://google.com'
                    }, {
                        title: 'Two',
                        href: 'http://google.com'
                    }]
            }];
    }
    TilesComponent.prototype.addAlert = function () {
        this.alS.jason('succes');
    };
    TilesComponent.prototype.onChange = function (e) {
        console.warn('tile onChange(e)', e);
    };
    return TilesComponent;
}());
TilesComponent = __decorate([
    core_1.Component({
        selector: 'app-tiles',
        templateUrl: 'app/components/components/tiles/tiles.component.html'
    }),
    __metadata("design:paramtypes", [alert_service_1.AlertService])
], TilesComponent);
exports.TilesComponent = TilesComponent;
