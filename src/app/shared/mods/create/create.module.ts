import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateRecipesComponent } from './comp/create-recipes/create-recipes.component';

@NgModule({
  declarations: [CreateRecipesComponent],
  imports: [
    CommonModule,
    CreateRoutingModule
  ]
})
export class CreateModule { }
