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
var CodeDisplayDirective = (function () {
    function CodeDisplayDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.setElementClass(this.el.nativeElement, 'sg-code-block', true);
    }
    CodeDisplayDirective.prototype.ngAfterContentInit = function () {
        var text = this.el.nativeElement.innerHTML;
        var snippet = text.replace(/\</g, '&lt;').replace(/\>/g, '&gt;').replace(/\t/g, '&nbsp;&nbsp;');
        this.renderer.setElementProperty(this.el.nativeElement, 'innerHTML', snippet);
        setTimeout(function () {
            PR.prettyPrint();
        }, 100);
    };
    return CodeDisplayDirective;
}());
CodeDisplayDirective = __decorate([
    core_1.Directive({ selector: '[code-display]' }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], CodeDisplayDirective);
exports.CodeDisplayDirective = CodeDisplayDirective;
