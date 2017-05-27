import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tile',
  templateUrl: 'app/components/components/tile/tile.component.html'
})
export class TileComponent {
  isFavorited = false;

  @Input() tileData = {
    title: 'Item',
    desc: 'description text',
    baseHref: 'http://target.com',
    favorite: this.isFavorited,
    isFave: false,
    isIcon: false,
    icon: 'check',
    actions: [{
      title: 'One',
      href: 'http://google.com'
    },{
      title: 'Two',
      href: 'http://google.com'
    }]
  };

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  constructor(public router: Router) {
    console.warn('construtor', this);
  }

  baseAction() {
    // starts with '/' means route
    var route =  /^\//g.test(this.tileData.baseHref);
    if (route) {
      this.router.navigate(['/ng2']);
    } else {
      window.open(this.tileData.baseHref, '_blank');
    }
  }

  setAsFavorite(e) {
    e.stopPropagation();
    this.isFavorited = !this.isFavorited;
    this.onChange.emit(this.tileData);
  }
}
