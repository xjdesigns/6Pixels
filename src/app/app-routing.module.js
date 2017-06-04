"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var welcome_component_1 = require("./components/welcome/welcome.component");
var grid_component_1 = require("./components/grid/grid.component");
var var_component_1 = require("./components/variables/var.component");
var helpers_component_1 = require("./components/helpers/helpers.component");
var components_1 = require("./components");
var NG2_1 = require("./NG2");
var firebase_game_component_1 = require("./firebase-game/firebase-game.component");
var routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: 'elements', component: components_1.ElementsComponent },
    { path: 'grid', component: grid_component_1.GridComponent },
    { path: 'components', component: components_1.ComponentsComponent },
    { path: 'variable', component: var_component_1.VarComponent },
    { path: 'helpers', component: helpers_component_1.HelpersComponent },
    { path: 'ng2', component: NG2_1.Ng2Component },
    { path: 'firebase-game', component: firebase_game_component_1.FirebaseGameComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
