import { Component } from '@angular/core';
import { AlertService } from '../../../services/alert-service';

@Component({
  selector: 'app-tiles',
  templateUrl: 'app/components/components/tiles/tiles.component.html'
})
export class TilesComponent {
  description = [{
    add: '[tileData]',
    desc: '[tileData] object, see properties below'
  }, {
    add: '.app-tile--fave',
    desc: 'Class for app-tile which shows at 50%'
  }, {
    add: '{title}: string',
    desc: 'Tile title property'
  }, {
    add: '{desc}: string',
    desc: 'Tile description property'
  }, {
    add: '{baseHref}: string',
    desc: 'Base href property, can be route or href'
  }, {
    add: '{favorite}: boolean',
    desc: 'Favorite property'
  }, {
    add: '{isIcon}: boolean',
    desc: 'isIcon property'
  }, {
    add: '{icon}: string',
    desc: 'icon property is ligature to display if isIcon is true'
  }, {
    add: '{actions[{title,href}]}: array',
    desc: 'actions property is array of objects. '
  }, {
    add: '(onChange)',
    desc: '(onChange) event is emitted when favorite is toggled, passes tileData object as $event'
  }];

  theTiles = [{
    title: 'Item',
    desc: 'description text',
    baseHref: 'http://target.com',
    favorite: false,
    isIcon: false,
    icon: 'check',
    actions: [{
      title: 'One',
      href: 'http://google.com'
    },{
      title: 'Two',
      href: 'http://google.com'
    }]
  },{
    title: 'Item 1',
    desc: 'description text',
    baseHref: '/ng2',
    favorite: true,
    isIcon: true,
    icon: 'check',
    actions: [{
      title: 'One',
      href: 'http://google.com'
    },{
      title: 'Two',
      href: 'http://google.com'
    }]
  },{
    title: 'Item 2',
    desc: 'description text',
    baseHref: 'http://target.com',
    favorite: false,
    isIcon: false,
    icon: 'check',
    actions: [{
      title: 'One',
      href: 'http://google.com'
    },{
      title: 'Two',
      href: 'http://google.com'
    }]
  }];

  constructor(private alS: AlertService) {}

  addAlert() {
    this.alS.jason('succes');
  }

  onChange(e) {
    console.warn('tile onChange(e)', e)
  }
}
