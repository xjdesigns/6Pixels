import { TooltipComponent } from './tooltip/tooltip.component';
import { MediaObjComponent } from './media-obj/media-obj.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ToastComponent } from './toast/toast.component';
import { LoadingComponent } from './loading/loading.component';
import { AccordionComponent } from './accordion/accordion.component';
import { TilesComponent } from './tiles/tiles.component';
import { FlyoutComponent } from './flyout/flyout.component';
import { CardComponent } from './card/card.component';

export const ComponentsRouting = [
  { path: 'tooltip', component: TooltipComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'media-obj', component: MediaObjComponent },
  { path: 'breadcrumb', component: BreadcrumbComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'toast', component: ToastComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'tiles', component: TilesComponent },
  { path: 'flyout', component: FlyoutComponent },
  { path: 'card', component: CardComponent }
];
