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
  @Input() tileData = {
    title: 'Item',
    desc: 'description text',
    baseHref: 'http://target.com',
    favorite: false,
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

  constructor(public router: Router) {}

  baseAction() {
    var link = this.tileData.baseHref;
    // starts with '/' means route
    var route =  /^\//g.test(link);
    if (route) {
      this.router.navigate([link]);
    } else {
      window.open(link, '_blank');
    }
  }

  setAsFavorite(e) {
    e.stopPropagation();
    this.tileData.favorite = !this.tileData.favorite;
    this.onChange.emit(this.tileData);
  }
}
