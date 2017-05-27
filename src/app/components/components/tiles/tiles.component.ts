import { Component } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: 'app/components/components/tiles/tiles.component.html'
})
export class TilesComponent {
  description = [{
    add: '[tileData]',
    desc: 'Tile data object, see properties below'
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
    add: '{isFave}: boolean',
    desc: 'isFave property displays as favorite and 50% width'
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
    add: 'onChange',
    desc: 'onChange event is emitted when favorite is toggled, passes tileData object as $event'
  }];

  theTiles = [{
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
  },{
    title: 'Item 1',
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
  },{
    title: 'Item 2',
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
  }]
}
