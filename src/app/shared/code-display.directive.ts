import { Directive, ElementRef, Input, Renderer } from '@angular/core';
declare var PR:any;

@Directive({ selector: '[code-display]' })
export class CodeDisplayDirective {
    constructor(private el: ElementRef, private renderer: Renderer) {
      this.renderer.setElementClass(this.el.nativeElement, 'sg-code-block', true);
    }

    ngAfterContentInit() {
      let text = this.el.nativeElement.innerHTML;
      let snippet = text.replace(/\</g, '&lt;').replace(/\>/g, '&gt;').replace(/\t/g, '&nbsp;&nbsp;');
      this.renderer.setElementProperty(this.el.nativeElement, 'innerHTML', snippet);
      setTimeout(() => {
        PR.prettyPrint();
      }, 100);
    }
}
