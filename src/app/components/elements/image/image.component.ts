import { Component } from '@angular/core';
import { UnsplashService } from '../../../services/unsplash.service';

@Component({
  selector: 'app-image',
  templateUrl: 'app/components/elements/image/image.component.html',
  providers: [ UnsplashService ]
})

export class ImageComponent {
  photos: any[] = [];
  private img01 = 'https://images.unsplash.com/photo-1475727946784-2890c8fdb9c8?dpr=2&auto=format&fit=crop&w=1500&h=985&q=80&cs=tinysrgb&crop=';

  constructor(private unsplash: UnsplashService) {}

  ngOnInit() {
    // this.getPhotos();
  }

  getPhotos() {
    this.unsplash
        .getPhotos()
        .then(photos => {
          console.warn('photos::', photos);
          this.photos = photos;
        });
  }
}
