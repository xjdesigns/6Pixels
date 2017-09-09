// ELEMENTS
import { ElementsComponent } from './elements/elements.component';
import { FormsComponent } from './elements/forms/forms.component';
import { ButtonComponent } from './elements/button/button.component';
import { ProgressBarComponent } from './elements/progress-bar/progress-bar.component';
import { RangeSliderComponent } from './elements/range-slider/range-slider.component';
import { RadioComponent } from './elements/radio/radio.component';
import { CheckboxComponent } from './elements/checkbox/checkbox.component';
import { ToggleComponent } from './elements/toggle/toggle.component';
import { ImageComponent } from './elements/image/image.component';
import { VideoComponent } from './elements/video/video.component';
import { PillsComponent } from './elements/pills/pills.component';
import { SelectComponent } from './elements/select/select.component';

const ElementsProvider = [
  ElementsComponent,
  FormsComponent,
  ButtonComponent,
  ProgressBarComponent,
  RangeSliderComponent,
  RadioComponent,
  CheckboxComponent,
  ToggleComponent,
  ImageComponent,
  VideoComponent,
  PillsComponent,
  SelectComponent
];
export { ElementsComponent } from './elements/elements.component';
export { ButtonComponent } from './elements/button/button.component';

// COMPONENTS
import { ComponentsComponent } from './components/components.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { MediaObjComponent } from './components/media-obj/media-obj.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ToastComponent } from './components/toast/toast.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { TilesComponent } from './components/tiles/tiles.component';
import { TileComponent } from './components/tile/tile.component';
import { FlyoutComponent } from './components/flyout/flyout.component';
import { CardComponent } from './components/card/card.component';

const ComponentsProvider = [
  ComponentsComponent,
  TooltipComponent,
  MediaObjComponent,
  BreadcrumbComponent,
  PaginationComponent,
  ToastComponent,
  LoadingComponent,
  AccordionComponent,
  TilesComponent,
  TileComponent,
  FlyoutComponent,
  CardComponent
];
export { ComponentsComponent } from './components/components.component';

// EXPORT PROVIDERS AS ONE
export const SixPixelsProvider = [
  ...ElementsProvider,
  ...ComponentsProvider
];
