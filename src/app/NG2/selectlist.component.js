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
var NO_SELECTION_ID = 'none';
var SelectlistComponent = (function () {
    function SelectlistComponent() {
        this.list = [];
        this.selected = [];
        this.selectedID = '';
        this.isOpen = false;
        this.data = [];
        this.multiple = false;
        this.search = false;
        this.outputType = 'array';
        this.valueProp = 'uuid';
        this.nameProp = 'name';
        this.currentSelection = [];
        this.onChange = new core_1.EventEmitter();
    }
    // USE: supply the <select-list> with an Array[] as [data]
    // name and uuid are default properties, change with nameProp or valueProp
    // this will return you a new array of uuids as default
    // attr[outputType] can return string, default is array
    SelectlistComponent.prototype.ngOnInit = function () {
        // set default of false to all
        this.list = this.data.map(function (d) {
            return Object.assign({}, d, { selected: false });
        });
        // initialize
        this.initSelect();
    };
    SelectlistComponent.prototype.toggleList = function () {
        this.isOpen = !this.isOpen;
    };
    SelectlistComponent.prototype.initSelect = function () {
        var _this = this;
        // if supplied a string set as an array for checks
        // strings and arrays supported
        if (this.currentSelection === null) {
            // if null set to 'none'
            this.selectedID = NO_SELECTION_ID;
            this.currentSelection = [
                (_a = {}, _a[this.valueProp] = NO_SELECTION_ID, _a)
            ];
        }
        if (typeof this.currentSelection === 'string') {
            // if string set the arrays object to the valueProp
            this.setDisplaySelected(this.currentSelection);
            this.currentSelection = [
                (_b = {}, _b[this.valueProp] = this.currentSelection, _b)
            ];
        }
        var init = this.currentSelection.map(function (c) {
            return c[_this.valueProp];
        });
        this.setSelected(init);
        var _a, _b;
    };
    SelectlistComponent.prototype.selectElement = function (e) {
        if (e === NO_SELECTION_ID) {
            this.selected = [];
            this.setSelected(e);
            this.selectedID = e;
            return;
        }
        if (this.multiple) {
            var index = this.selected.indexOf(e);
            if (index === -1) {
                this.selected.push(e);
            }
            else {
                this.selected.splice(index, 1);
            }
        }
        else {
            this.selected = [e];
            this.setDisplaySelected(e);
        }
        this.valSet(this.selected);
        this.setSelected(this.selected);
    };
    SelectlistComponent.prototype.setDisplaySelected = function (e) {
        var _this = this;
        if (this.multiple) {
            console.warn('Multiple selects do not need display');
            return;
        }
        var sel = this.list.filter(function (l) {
            return e === l[_this.valueProp];
        });
        this.selectedID = sel[0][this.nameProp];
    };
    SelectlistComponent.prototype.setSelected = function (id) {
        var _this = this;
        if (!this.list) {
            console.error('No List Provided');
            return;
        }
        this.list.map(function (d) {
            var cc = id.indexOf(d[_this.valueProp]);
            if (_this.multiple && cc > -1) {
                d.selected = true;
            }
            else if (_this.multiple && cc === -1) {
                d.selected = false;
            }
            else {
                d.selected = d[_this.valueProp] === id[0];
            }
            return d;
        });
    };
    SelectlistComponent.prototype.valSet = function (res) {
        // output as 'string' return the string
        // default is 'array'
        if (this.outputType === 'string') {
            res = res.join();
        }
        this.onChange.emit(res);
    };
    SelectlistComponent.prototype.searchTerm = function (e) {
        var _this = this;
        var val = e.target.value;
        if (val.length === 0) {
            this.list = this.data;
            return;
        }
        this.list = this.data.filter(function (d) {
            var v = d[_this.nameProp].toLowerCase();
            return v.indexOf(val.toLowerCase()) !== -1;
        });
    };
    return SelectlistComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SelectlistComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SelectlistComponent.prototype, "multiple", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SelectlistComponent.prototype, "search", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SelectlistComponent.prototype, "outputType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SelectlistComponent.prototype, "valueProp", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SelectlistComponent.prototype, "nameProp", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SelectlistComponent.prototype, "currentSelection", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SelectlistComponent.prototype, "onChange", void 0);
SelectlistComponent = __decorate([
    core_1.Component({
        selector: 'app-selectlist',
        templateUrl: 'app/NG2/selectlist.component.html'
    })
], SelectlistComponent);
exports.SelectlistComponent = SelectlistComponent;
