import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateRecipesComponent } from './comp/create-recipes/create-recipes.component';
import { CreateformComponent } from './comp/create-recipes/createform/createform.component';

@NgModule({
  declarations: [
    CreateRecipesComponent, 
    CreateformComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule
  ]
})
export class CreateModule { }
