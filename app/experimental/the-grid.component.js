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
var TheGridComponent = (function () {
    function TheGridComponent() {
        this.columns = [];
        this.rows = [];
        this.gridItem = [];
        this.gap = {
            column: '10px',
            row: '10px'
        };
        this.bg = 'blue';
        this.newCol = {
            name: '',
            col: 'auto',
        };
        this.newRow = {
            name: '',
            row: 'auto'
        };
        this.tempColumns = 'auto';
        this.tempRows = 'auto';
        this.columns = [{
                name: '0',
                col: 'auto'
            }, {
                name: '1',
                col: 'auto'
            }];
        this.rows = [{
                name: '0',
                row: 'auto'
            }, {
                name: '1',
                row: 'auto'
            }];
    }
    TheGridComponent.prototype.addCol = function () {
        this.newCol.name = this.columns.length + 1;
        this.columns.push(this.newCol);
    };
    TheGridComponent.prototype.addRow = function () {
        this.newRow.name = this.rows.length + 1;
        this.rows.push(this.newRow);
    };
    TheGridComponent.prototype.theGrid = function () {
        return {
            'display': 'grid',
            'grid-template-columns': "" + this.tempColumns,
            'grid-template-rows': "" + this.tempRows,
            'grid-column-gap': "" + this.gap.column,
            'grid-row-gap': "" + this.gap.row
        };
    };
    TheGridComponent.prototype.applyGridChanges = function (c, r, gp) {
        this.setTemplateColumns(c.value);
        this.setTemplateRows(r.value);
        this.setGridGap(gp);
        var c = this.tempColumns.split(" ");
        var r = this.tempRows.split(" ");
        var a = new Array(c.length * r.length);
        this.gridItem = a;
    };
    TheGridComponent.prototype.setTemplateColumns = function (g) {
        var cc = [];
        Object.keys(g).forEach(function (o) {
            cc.push(g[o]);
        });
        this.tempColumns = cc.join(" ");
    };
    TheGridComponent.prototype.setTemplateRows = function (g) {
        var rr = [];
        Object.keys(g).forEach(function (o) {
            rr.push(g[o]);
        });
        this.tempRows = rr.join(" ");
    };
    TheGridComponent.prototype.setGridGap = function (gap) {
        this.gap = {
            column: gap.value['gap-column'],
            row: gap.value['gap-row']
        };
    };
    TheGridComponent.prototype.submit = function (v) {
        console.warn('Val submitted', v);
    };
    TheGridComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-the-grid',
            templateUrl: 'the-grid.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TheGridComponent);
    return TheGridComponent;
}());
exports.TheGridComponent = TheGridComponent;
