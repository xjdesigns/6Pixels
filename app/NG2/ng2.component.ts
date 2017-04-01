import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-ng2',
  templateUrl: 'ng2.component.html'
})

export class Ng2Component {
  // images for display with carousel
  Images = [{
    AlternateImages: [{
      image: 'https://images.unsplash.com/photo-1463680821868-35b3a7410f06?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop='
    }, {
      image: 'https://images.unsplash.com/photo-1489674315798-8908c1f456d2?dpr=1&auto=format&fit=crop&w=1500&h=844&q=80&cs=tinysrgb&crop='
    }, {
      image: 'https://images.unsplash.com/photo-1414170695976-59c0463bd11d?dpr=1&auto=format&fit=crop&w=1500&h=913&q=80&cs=tinysrgb&crop='
    }, {
      image: 'https://images.unsplash.com/photo-1444831953286-fe8d05bb3334?dpr=1&auto=format&fit=crop&w=1500&h=1125&q=80&cs=tinysrgb&crop='
    }],
    PrimaryImage: [{
      image: 'https://images.unsplash.com/photo-1471622710663-8f18c20d6ee3?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop='
    }]
  }]
}
