import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { GridComponent } from './components/grid/grid.component';
import { VarComponent } from './components/variables/var.component';
import { HelpersComponent } from './components/helpers/helpers.component';

import { Ng2Component } from './NG2';

import { ElementRouting } from './components/elements/elements.routes';
import { ComponentsRouting } from './components/components/components.routes';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'grid', component: GridComponent },
  { path: 'variable', component: VarComponent },
  { path: 'helpers', component: HelpersComponent },
  { path: 'ng2', component: Ng2Component},
  ...ElementRouting,
  ...ComponentsRouting
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
