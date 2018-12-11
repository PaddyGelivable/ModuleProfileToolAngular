import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModulesComponent } from './modules/modules.component';
import { ModuleService } from './shared/module.service';
import { ModuleDetailComponent } from './module-detail/module-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ModuleimporterComponent } from './moduleimporter/moduleimporter.component';

@NgModule({
  declarations: [
    AppComponent,
    ModulesComponent,
    ModuleDetailComponent,
    ModuleimporterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ModuleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
