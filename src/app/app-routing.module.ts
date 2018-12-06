import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModulesComponent } from './modules/modules.component';
import { ModuleDetailComponent } from './module-detail/module-detail.component';

const routes: Routes = [
  { path: 'modules', component: ModulesComponent },
  { path: '', redirectTo: '/modules', pathMatch: 'full' },
  { path: 'detail/:id', component: ModuleDetailComponent },
  { path: 'newModules', component: ModuleDetailComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
