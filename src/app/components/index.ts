// ELEMENTS
import { ElementsComponent } from './elements/elements.component';
import { FormsComponent } from './elements/forms.component';
import { ButtonComponent } from './elements/button.component';
import { ProgressBarComponent } from './elements/progress-bar.component';
import { RangeSliderComponent } from './elements/range-slider.component';
import { RadioComponent } from './elements/radio.component';
import { CheckboxComponent } from './elements/checkbox.component';
import { ToggleComponent } from './elements/toggle.component';
import { ImageComponent } from './elements/image.component';
import { VideoComponent } from './elements/video.component';
import { PillsComponent } from './elements/pills.component';
import { SelectComponent } from './elements/select.component';

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

// COMPONENTS
import { ComponentsComponent } from './components/components.component';
import { TooltipComponent } from './components/tooltip.component';
import { MediaObjComponent } from './components/media-obj.component';
import { BreadcrumbComponent } from './components/breadcrumb.component';
import { PaginationComponent } from './components/pagination.component';
import { ToastComponent } from './components/toast.component';
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
