"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ELEMENTS
var elements_component_1 = require("./elements/elements.component");
var forms_component_1 = require("./elements/forms/forms.component");
var button_component_1 = require("./elements/button/button.component");
var progress_bar_component_1 = require("./elements/progress-bar/progress-bar.component");
var range_slider_component_1 = require("./elements/range-slider/range-slider.component");
var radio_component_1 = require("./elements/radio/radio.component");
var checkbox_component_1 = require("./elements/checkbox/checkbox.component");
var toggle_component_1 = require("./elements/toggle/toggle.component");
var image_component_1 = require("./elements/image/image.component");
var video_component_1 = require("./elements/video/video.component");
var pills_component_1 = require("./elements/pills/pills.component");
var select_component_1 = require("./elements/select/select.component");
var ElementsProvider = [
    elements_component_1.ElementsComponent,
    forms_component_1.FormsComponent,
    button_component_1.ButtonComponent,
    progress_bar_component_1.ProgressBarComponent,
    range_slider_component_1.RangeSliderComponent,
    radio_component_1.RadioComponent,
    checkbox_component_1.CheckboxComponent,
    toggle_component_1.ToggleComponent,
    image_component_1.ImageComponent,
    video_component_1.VideoComponent,
    pills_component_1.PillsComponent,
    select_component_1.SelectComponent
];
var elements_component_2 = require("./elements/elements.component");
exports.ElementsComponent = elements_component_2.ElementsComponent;
var button_component_2 = require("./elements/button/button.component");
exports.ButtonComponent = button_component_2.ButtonComponent;
// COMPONENTS
var components_component_1 = require("./components/components.component");
var tooltip_component_1 = require("./components/tooltip/tooltip.component");
var media_obj_component_1 = require("./components/media-obj/media-obj.component");
var breadcrumb_component_1 = require("./components/breadcrumb/breadcrumb.component");
var pagination_component_1 = require("./components/pagination/pagination.component");
var toast_component_1 = require("./components/toast/toast.component");
var loading_component_1 = require("./components/loading/loading.component");
var accordion_component_1 = require("./components/accordion/accordion.component");
var tiles_component_1 = require("./components/tiles/tiles.component");
var tile_component_1 = require("./components/tile/tile.component");
var flyout_component_1 = require("./components/flyout/flyout.component");
var card_component_1 = require("./components/card/card.component");
var ComponentsProvider = [
    components_component_1.ComponentsComponent,
    tooltip_component_1.TooltipComponent,
    media_obj_component_1.MediaObjComponent,
    breadcrumb_component_1.BreadcrumbComponent,
    pagination_component_1.PaginationComponent,
    toast_component_1.ToastComponent,
    loading_component_1.LoadingComponent,
    accordion_component_1.AccordionComponent,
    tiles_component_1.TilesComponent,
    tile_component_1.TileComponent,
    flyout_component_1.FlyoutComponent,
    card_component_1.CardComponent
];
var components_component_2 = require("./components/components.component");
exports.ComponentsComponent = components_component_2.ComponentsComponent;
// EXPORT PROVIDERS AS ONE
exports.SixPixelsProvider = ElementsProvider.concat(ComponentsProvider);
