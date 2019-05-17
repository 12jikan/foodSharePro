import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { CreateRoutingModule } from './create-routing.module';
import { CreateRecipesComponent } from './comp/create-recipes/create-recipes.component';
import { CreateformComponent } from './comp/create-recipes/createform/createform.component';
import { Formpt1Component } from './comp/create-recipes/createform/formpt1/formpt1.component';
import { Formpt2Component } from './comp/create-recipes/createform/formpt2/formpt2.component';

@NgModule({
  declarations: [
    CreateRecipesComponent, 
    CreateformComponent, Formpt1Component, Formpt2Component,
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    FormsModule,
  ]
})
export class CreateModule { }
