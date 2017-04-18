import {
  Component,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: 'app/components/elements/elements.component.html'
})

export class ElementsComponent {
  frontActive: boolean = false;
  buttonActive: boolean = false;

  @HostListener('window:scroll', ['$event']) onDocScroll(ev) {
    let point = ev.target.body.scrollTop;
    if (point >= 10 && point <= 600) {
      this.frontActive = true;
    } else {
      this.frontActive = false;
    }
  }

  elements = [{
    name: 'buttons'
  }, {
    name: 'forms'
  }, {
    name: 'tips'
  }, {
    name: 'progress bar'
  }, {
    name: 'pills'
  }];

  activate(arg) {
    switch(arg) {
      case 'button':
        this.buttonActive = true;
        break;
      default:
        this.buttonActive = false;
    }
  }
}
