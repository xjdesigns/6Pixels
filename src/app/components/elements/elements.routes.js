"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_component_1 = require("./forms/forms.component");
var button_component_1 = require("./button/button.component");
var progress_bar_component_1 = require("./progress-bar/progress-bar.component");
var range_slider_component_1 = require("./range-slider/range-slider.component");
var radio_component_1 = require("./radio/radio.component");
var checkbox_component_1 = require("./checkbox/checkbox.component");
var toggle_component_1 = require("./toggle/toggle.component");
var image_component_1 = require("./image/image.component");
var video_component_1 = require("./video/video.component");
var pills_component_1 = require("./pills/pills.component");
var select_component_1 = require("./select/select.component");
exports.ElementRouting = [
    { path: 'buttons', component: button_component_1.ButtonComponent },
    { path: 'forms', component: forms_component_1.FormsComponent },
    { path: 'progress-bar', component: progress_bar_component_1.ProgressBarComponent },
    { path: 'range-slider', component: range_slider_component_1.RangeSliderComponent },
    { path: 'radio', component: radio_component_1.RadioComponent },
    { path: 'checkbox', component: checkbox_component_1.CheckboxComponent },
    { path: 'toggle', component: toggle_component_1.ToggleComponent },
    { path: 'image', component: image_component_1.ImageComponent },
    { path: 'video', component: video_component_1.VideoComponent },
    { path: 'pills', component: pills_component_1.PillsComponent },
    { path: 'select', component: select_component_1.SelectComponent }
];
