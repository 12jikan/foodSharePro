import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CreateModule } from './mods/create/create.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CreateModule,
  ],
  exports: [
    SharedRoutingModule
  ]
})
export class SharedModule { }
