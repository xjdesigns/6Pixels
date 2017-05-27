import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: 'app/NG2/carousel.component.html'
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
  prevIsDisabled = false;
  nextIsDisabled = false;

  @Input() images = {};
  @Input() primary: string = 'PrimaryImage';
  @Input() alternate: string = 'AlternateImages';

  ngOnInit() {
    this.imgs = this.images[0];
    this.currentImg = this.imgs[this.primary][0].image;
    this.altImgs = this.addPrimaryToAlt(this.imgs[this.alternate], this.imgs[this.primary][0]);
    this.length = this.altImgs.length;
    this.isDisabled();
  }

  addPrimaryToAlt(o, n) {
    o.unshift(n);
    return o;
  }

  selectImage(idx) {
    this.currentSlide = idx;
    this.currentImg = this.altImgs[this.currentSlide].image;
  }

  nextImage() {
    if (this.slide === (this.length - 3)) {
      return;
    }
    this.offset = this.offset + this.imgWidth;
    this.slide++;
    this.isDisabled();
  }
  previousImage() {
    if (this.slide === 0) {
      return;
    }
    this.offset = this.offset - this.imgWidth;
    this.slide--;
    this.isDisabled();
  }

  openZoomModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }

  isDisabled() {
    this.prevIsDisabled = (this.length - this.slide) === this.length ? true : false;
    this.nextIsDisabled = (this.length - this.slide) === 3 ? true : false;
  }
}
