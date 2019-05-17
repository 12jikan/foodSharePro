import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule
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
