"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./components/welcome/welcome.component");
var grid_component_1 = require("./components/grid/grid.component");
var var_component_1 = require("./components/variables/var.component");
var helpers_component_1 = require("./components/helpers/helpers.component");
var code_display_directive_1 = require("./shared/code-display.directive");
var code_table_component_1 = require("./shared/code-table.component");
// PROVIDERS
var components_1 = require("./components");
var NG2_1 = require("./NG2");
var alert_1 = require("./services/alert/alert");
var alert_service_1 = require("./services/alert-service");
var firebase_game_component_1 = require("./firebase-game/firebase-game.component");
var angular_module_starter_1 = require("angular-module-starter");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
            angular_module_starter_1.AngularModuleStarterModule
        ],
        declarations: [
            app_component_1.AppComponent,
            welcome_component_1.WelcomeComponent,
            grid_component_1.GridComponent,
            helpers_component_1.HelpersComponent,
            var_component_1.VarComponent,
            code_display_directive_1.CodeDisplayDirective,
            code_table_component_1.CodeTableComponent,
            alert_1.AlertComponent,
            firebase_game_component_1.FirebaseGameComponent
        ].concat(components_1.SixPixelsProvider, NG2_1.Ng2Provider),
        providers: [
            alert_service_1.AlertService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
