"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tooltip_component_1 = require("./tooltip/tooltip.component");
var media_obj_component_1 = require("./media-obj/media-obj.component");
var breadcrumb_component_1 = require("./breadcrumb/breadcrumb.component");
var pagination_component_1 = require("./pagination/pagination.component");
var toast_component_1 = require("./toast/toast.component");
var loading_component_1 = require("./loading/loading.component");
var accordion_component_1 = require("./accordion/accordion.component");
var tiles_component_1 = require("./tiles/tiles.component");
var flyout_component_1 = require("./flyout/flyout.component");
var card_component_1 = require("./card/card.component");
exports.ComponentsRouting = [
    { path: 'tooltip', component: tooltip_component_1.TooltipComponent },
    { path: 'accordion', component: accordion_component_1.AccordionComponent },
    { path: 'media-obj', component: media_obj_component_1.MediaObjComponent },
    { path: 'breadcrumb', component: breadcrumb_component_1.BreadcrumbComponent },
    { path: 'pagination', component: pagination_component_1.PaginationComponent },
    { path: 'toast', component: toast_component_1.ToastComponent },
    { path: 'loading', component: loading_component_1.LoadingComponent },
    { path: 'tiles', component: tiles_component_1.TilesComponent },
    { path: 'flyout', component: flyout_component_1.FlyoutComponent },
    { path: 'card', component: card_component_1.CardComponent }
];
