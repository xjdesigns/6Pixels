import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { GridComponent } from './components/grid/grid.component';
import { VarComponent } from './components/variables/var.component';
import { HelpersComponent } from './components/helpers/helpers.component';

import {
  ElementsComponent,
  ComponentsComponent
} from './components';
import { Ng2Component } from './NG2';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'elements', component: ElementsComponent },
  { path: 'grid', component: GridComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'variable', component: VarComponent },
  { path: 'helpers', component: HelpersComponent },
  { path: 'ng2', component: Ng2Component}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
