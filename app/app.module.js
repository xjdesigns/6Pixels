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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./components/welcome/welcome.component");
var grid_component_1 = require("./components/grid/grid.component");
var tables_component_1 = require("./components/tables/tables.component");
var var_component_1 = require("./components/variables/var.component");
var helpers_component_1 = require("./components/helpers/helpers.component");
var code_display_directive_1 = require("./shared/code-display.directive");
var code_table_component_1 = require("./shared/code-table.component");
// PROVIDERS
var components_1 = require("./components");
var NG2_1 = require("./NG2");
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
            router_1.RouterModule.forRoot([
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: 'elements', component: components_1.ElementsComponent },
                { path: 'grid', component: grid_component_1.GridComponent },
                { path: 'tables', component: tables_component_1.TablesComponent },
                { path: 'components', component: components_1.ComponentsComponent },
                { path: 'variable', component: var_component_1.VarComponent },
                { path: 'helpers', component: helpers_component_1.HelpersComponent },
                { path: 'ng2', component: NG2_1.Ng2Component },
                { path: '', component: welcome_component_1.WelcomeComponent }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            welcome_component_1.WelcomeComponent,
            grid_component_1.GridComponent,
            tables_component_1.TablesComponent,
            helpers_component_1.HelpersComponent,
            var_component_1.VarComponent,
            code_display_directive_1.CodeDisplayDirective,
            code_table_component_1.CodeTableComponent
        ].concat(components_1.SixPixelsProvider, NG2_1.Ng2Provider),
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
