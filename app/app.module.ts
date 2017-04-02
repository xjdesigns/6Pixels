import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from  '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { GridComponent } from './components/grid/grid.component';
import { VarComponent } from './components/variables/var.component';
import { HelpersComponent } from './components/helpers/helpers.component';

import { CodeDisplayDirective } from './shared/code-display.directive';
import { CodeTableComponent } from './shared/code-table.component';

// PROVIDERS
import {
  ElementsComponent,
  ComponentsComponent,
  SixPixelsProvider
} from './components'
import { Ng2Component, Ng2Provider } from './NG2'

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'elements', component: ElementsComponent },
      { path: 'grid', component: GridComponent },
      { path: 'components', component: ComponentsComponent },
      { path: 'variable', component: VarComponent },
      { path: 'helpers', component: HelpersComponent },
      { path: 'ng2', component: Ng2Component},
      { path: '', component: WelcomeComponent }
    ])
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    GridComponent,
    HelpersComponent,
    VarComponent,
    CodeDisplayDirective,
    CodeTableComponent,
    ...SixPixelsProvider,
    ...Ng2Provider
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
