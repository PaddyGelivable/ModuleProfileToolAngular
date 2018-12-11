import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModulesComponent } from './modules/modules.component';
import { ModuleDetailComponent } from './module-detail/module-detail.component';
import { ModuleimporterComponent } from './moduleimporter/moduleimporter.component';

const routes: Routes = [
  { path: 'modules', component: ModulesComponent },
  { path: '', redirectTo: '/modules', pathMatch: 'full' },
  { path: 'detail/:id', component: ModuleDetailComponent },
  { path: 'newModules', component: ModuleDetailComponent },
  { path: 'importmodule', component: ModuleimporterComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
