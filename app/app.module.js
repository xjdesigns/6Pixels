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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var welcome_component_1 = require('./components/welcome/welcome.component');
var elements_component_1 = require('./components/elements/elements.component');
var button_component_1 = require('./components/elements/button.component');
var tooltip_component_1 = require('./components/elements/tooltip.component');
var var_component_1 = require('./components/variables/var.component');
var code_display_directive_1 = require('./shared/code-display.directive');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                    { path: 'elements', component: elements_component_1.ElementsComponent },
                    { path: 'variable', component: var_component_1.VarComponent },
                    { path: '', component: welcome_component_1.WelcomeComponent }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                welcome_component_1.WelcomeComponent,
                elements_component_1.ElementsComponent,
                button_component_1.ButtonComponent,
                tooltip_component_1.TooltipComponent,
                var_component_1.VarComponent,
                code_display_directive_1.CodeDisplayDirective
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
