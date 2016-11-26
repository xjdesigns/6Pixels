import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from  '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ElementsComponent } from './components/elements/elements.component';
import { VarComponent } from './components/variables/var.component';

import { CodeDisplayDirective } from './shared/code-display.directive';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'elements', component: ElementsComponent },
      { path: 'variable', component: VarComponent },
      { path: '', component: WelcomeComponent }
    ])
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    ElementsComponent,
    VarComponent,
    CodeDisplayDirective
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
