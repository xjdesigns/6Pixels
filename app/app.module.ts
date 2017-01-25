import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from  '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

import { ElementsComponent } from './components/elements/elements.component';
import { FormsComponent } from './components/elements/forms.component';
import { ButtonComponent } from './components/elements/button.component';
import { ProgressBarComponent } from './components/elements/progress-bar.component';
import { RangeSliderComponent } from './components/elements/range-slider.component';
import { RadioComponent } from './components/elements/radio.component';
import { CheckboxComponent } from './components/elements/checkbox.component';
import { ToggleComponent } from './components/elements/toggle.component';
import { ImageComponent } from './components/elements/image.component';
import { VideoComponent } from './components/elements/video.component';
import { PillsComponent } from './components/elements/pills.component';
import { SelectComponent } from './components/elements/select.component';

import { GridComponent } from './components/grid/grid.component';

import { VarComponent } from './components/variables/var.component';

import { HelpersComponent } from './components/helpers/helpers.component';

import { ComponentsComponent } from './components/components/components.component';
import { TooltipComponent } from './components/components/tooltip.component';
import { MediaObjComponent } from './components/components/media-obj.component';

import { CodeDisplayDirective } from './shared/code-display.directive';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'elements', component: ElementsComponent },
      { path: 'grid', component: GridComponent },
      { path: 'components', component: ComponentsComponent },
      { path: 'variable', component: VarComponent },
      { path: 'helpers', component: HelpersComponent },
      { path: '', component: WelcomeComponent }
    ])
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    ElementsComponent,
    GridComponent,
    ComponentsComponent,
    HelpersComponent,
    FormsComponent,
    MediaObjComponent,
    ButtonComponent,
    RangeSliderComponent,
    RadioComponent,
    CheckboxComponent,
    ToggleComponent,
    VideoComponent,
    PillsComponent,
    ImageComponent,
    SelectComponent,
    ProgressBarComponent,
    TooltipComponent,
    VarComponent,
    CodeDisplayDirective
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
