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
var Chartist = require("chartist");
var ChartistComponent = (function () {
    function ChartistComponent(element) {
        this.element = element.nativeElement;
    }
    ChartistComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.type || !this.data) {
            Promise.reject("Expected at least type and data.");
        }
        return this.renderChart().then(function (chart) {
            if (_this.events !== undefined) {
                _this.bindEvents(chart);
            }
            return chart;
        });
    };
    ChartistComponent.prototype.ngOnChanges = function (changes) {
        this.update(changes);
    };
    ChartistComponent.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.detach();
        }
    };
    ChartistComponent.prototype.renderChart = function () {
        var _this = this;
        var promises = [this.type, this.element, this.data, this.options, this.responsiveOptions];
        return Promise.all(promises).then(function (values) {
            var type = values[0], args = values.slice(1);
            if (!(type in Chartist)) {
                throw new Error(type + " is not a valid chart type");
            }
            _this.chart = (_a = Chartist)[type].apply(_a, args);
            return _this.chart;
            var _a;
        });
    };
    ChartistComponent.prototype.update = function (changes) {
        if (!this.chart || 'type' in changes) {
            this.renderChart();
        }
        else {
            if (changes['data']) {
                this.data = changes['data'].currentValue;
            }
            if (changes['options']) {
                this.options = changes['options'].currentValue;
            }
            this.chart.update(this.data, this.options);
        }
    };
    ChartistComponent.prototype.bindEvents = function (chart) {
        for (var _i = 0, _a = Object.keys(this.events); _i < _a.length; _i++) {
            var event_1 = _a[_i];
            chart.on(event_1, this.events[event_1]);
        }
    };
    return ChartistComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChartistComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChartistComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChartistComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChartistComponent.prototype, "responsiveOptions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChartistComponent.prototype, "events", void 0);
ChartistComponent = __decorate([
    core_1.Component({
        selector: 'x-chartist',
        template: '<ng-content></ng-content>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ChartistComponent);
exports.ChartistComponent = ChartistComponent;
var ChartistModule = (function () {
    function ChartistModule() {
    }
    return ChartistModule;
}());
ChartistModule = __decorate([
    core_1.NgModule({
        declarations: [ChartistComponent],
        exports: [ChartistComponent]
    })
], ChartistModule);
exports.ChartistModule = ChartistModule;
// for angular-cli
exports.default = {
    directives: [ChartistComponent]
};
