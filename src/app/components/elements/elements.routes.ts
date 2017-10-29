import { FormsComponent } from './forms/forms.component';
import { ButtonComponent } from './button/button.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { RadioComponent } from './radio/radio.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ImageComponent } from './image/image.component';
import { VideoComponent } from './video/video.component';
import { PillsComponent } from './pills/pills.component';
import { SelectComponent } from './select/select.component';

export const ElementRouting = [
  { path: 'buttons', component: ButtonComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'progress-bar', component: ProgressBarComponent },
  { path: 'range-slider', component: RangeSliderComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'toggle', component: ToggleComponent },
  { path: 'image', component: ImageComponent },
  { path: 'video', component: VideoComponent },
  { path: 'pills', component: PillsComponent },
  { path: 'select', component: SelectComponent }
];
