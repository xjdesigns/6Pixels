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
var forms_component_1 = require('./components/elements/forms.component');
var button_component_1 = require('./components/elements/button.component');
var progress_bar_component_1 = require('./components/elements/progress-bar.component');
var range_slider_component_1 = require('./components/elements/range-slider.component');
var radio_component_1 = require('./components/elements/radio.component');
var checkbox_component_1 = require('./components/elements/checkbox.component');
var toggle_component_1 = require('./components/elements/toggle.component');
var image_component_1 = require('./components/elements/image.component');
var video_component_1 = require('./components/elements/video.component');
var var_component_1 = require('./components/variables/var.component');
var helpers_component_1 = require('./components/helpers/helpers.component');
var components_component_1 = require('./components/components/components.component');
var tooltip_component_1 = require('./components/components/tooltip.component');
var media_obj_component_1 = require('./components/components/media-obj.component');
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
                    { path: 'components', component: components_component_1.ComponentsComponent },
                    { path: 'variable', component: var_component_1.VarComponent },
                    { path: 'helpers', component: helpers_component_1.HelpersComponent },
                    { path: '', component: welcome_component_1.WelcomeComponent }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                welcome_component_1.WelcomeComponent,
                elements_component_1.ElementsComponent,
                components_component_1.ComponentsComponent,
                helpers_component_1.HelpersComponent,
                forms_component_1.FormsComponent,
                media_obj_component_1.MediaObjComponent,
                button_component_1.ButtonComponent,
                range_slider_component_1.RangeSliderComponent,
                radio_component_1.RadioComponent,
                checkbox_component_1.CheckboxComponent,
                toggle_component_1.ToggleComponent,
                video_component_1.VideoComponent,
                image_component_1.ImageComponent,
                progress_bar_component_1.ProgressBarComponent,
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
