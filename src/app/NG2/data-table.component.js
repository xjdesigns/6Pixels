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
var DataTableComponent = (function () {
    // need thead data
    // need tbody data
    // need sorting
    // need filtering / fuzzy searching
    // numbers auto set to the predefined options
    // else pass a list of vals to filter
    // need row selection
    // possibly pass icons or images... star rating
    // needed as we need image displays and triggers for
    // displaying with a modal
    function DataTableComponent() {
        // data = [];
        this.list = [];
        this.final = [];
        this.allSelected = false;
        this.hidden = 0;
        // default if number is set in head data
        this.numberFilter = ['equals', 'not equal', 'less than', 'less than or equal', 'greater than', 'greater than or equals'];
        this.head = [{
                name: 'First Name',
                filters: [],
                sort: '01',
                type: 'string'
            }, {
                name: 'Last name',
                filters: [],
                sort: '01',
                type: 'string'
            }, {
                name: 'Age',
                filters: [],
                sort: '01',
                type: 'number'
            }];
        this.data = [{
                name: "Jason",
                lName: 'Jacobson',
                age: '33'
            }, {
                name: "Frank",
                lName: 'Wright',
                age: '20'
            }, {
                name: "John",
                lName: 'Doe',
                age: '19'
            }];
    }
    DataTableComponent.prototype.ngOnInit = function () {
        this.list = this.data.map(function (d) {
            d['selected'] = false;
            return d;
        });
    };
    DataTableComponent.prototype.jason = function (e) {
        var c = e.target.checked;
        this.setChecked(c);
    };
    DataTableComponent.prototype.selectAll = function (e) {
        var _this = this;
        var c = e.target.checked;
        if (!c) {
            this.final = [];
            this.setChecked(c);
        }
        else {
            this.list.forEach(function (d) {
                _this.final.push(d);
            });
            this.setChecked(c);
        }
        console.warn(this.final);
    };
    // checkboxes acting odd, I need to look at the data
    DataTableComponent.prototype.setRow = function (i, dt) {
        var _this = this;
        this.list.forEach(function (d, index) {
            // match first, the splice it off at its indexOf
            if (dt === d) {
                if (_this.final.indexOf(dt) !== -1) {
                    d['selected'] = false;
                    return _this.final.splice(_this.final.indexOf(dt), 1);
                }
            }
            if (i === index) {
                d['selected'] = true;
                return _this.final.push(d);
            }
        });
        // console.warn('set row data', this.final);
        // console.warn(this.list);
    };
    DataTableComponent.prototype.setChecked = function (bool) {
        this.list.forEach(function (d) {
            d['selected'] = bool;
            return d;
        });
    };
    DataTableComponent.prototype.sort = function () {
        this.list.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    };
    DataTableComponent.prototype.sortNumber = function () {
        this.list.sort(function (a, b) {
            return Number(a.age) - Number(b.age);
        });
    };
    DataTableComponent.prototype.handle = function (i) {
        console.warn('i', i);
        this.hidden = i + 1;
    };
    return DataTableComponent;
}());
DataTableComponent = __decorate([
    core_1.Component({
        selector: 'app-data-table',
        templateUrl: 'app/NG2/data-table.component.html'
    }),
    __metadata("design:paramtypes", [])
], DataTableComponent);
exports.DataTableComponent = DataTableComponent;
