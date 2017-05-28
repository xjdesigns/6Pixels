import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from  '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

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
import { Ng2Component, Ng2Provider } from './NG2';

import { AlertComponent } from './services/alert/alert';
import { AlertService } from './services/alert-service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    GridComponent,
    HelpersComponent,
    VarComponent,
    CodeDisplayDirective,
    CodeTableComponent,
    AlertComponent,
    ...SixPixelsProvider,
    ...Ng2Provider
  ],
  providers: [
    AlertService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
