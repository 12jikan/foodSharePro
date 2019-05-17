import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CreateModule } from './mods/create/create.module';
import { RecipeService } from './services/recipes.service';
import { AssetService } from './services/assets.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CreateModule,
  ],
  exports: [
    SharedRoutingModule
  ],
  providers: [
    RecipeService,
    AssetService,
  ]
})
export class SharedModule { }
