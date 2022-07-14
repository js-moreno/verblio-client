import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeskRoutingModule } from './desk-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ConferencesComponent } from './components/conferences/conferences.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ConferencesComponent],
  imports: [CommonModule, DeskRoutingModule, SharedModule, MaterialModule],
})
export class DeskModule {}
