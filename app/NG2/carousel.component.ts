import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-carousel',
  templateUrl: 'carousel.component.html'
})
export class CarouselComponent {
  imgs = {};
  imgWidth = 63; // match the image widths, we know from our styling
  slide = 0;
  isOpen = false;
  currentSlide = 0;
  offset = 0;
  currentImg = '';
  altImgs = [];
  length = 0;

  @Input() images = {};
  @Input() primary: string = 'PrimaryImage';
  @Input() alternate: string = 'AlternateImages';

  ngOnInit() {
    this.imgs = this.images[0];
    this.currentImg = this.imgs[this.primary][0].image;
    this.altImgs = this.addPrimaryToAlt(this.imgs[this.alternate], this.imgs[this.primary][0]);
    this.length = this.altImgs.length;
  }

  addPrimaryToAlt(o, n) {
    o.unshift(n);
    return o;
  }

  selectImage(idx) {
    console.warn(idx);
    this.currentSlide = idx;
    this.currentImg = this.altImgs[this.currentSlide].image;
  }

  nextImage() {
    if (this.slide === (this.length - 3)) {
      return;
    }
    this.offset = this.offset + this.imgWidth;
    this.slide++;
  }
  previousImage() {
    if (this.slide === 0) {
      return;
    }
    this.offset = this.offset - this.imgWidth;
    this.slide--;
  }

  openZoomModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }
}
