import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateRecipesComponent } from './comp/create-recipes/create-recipes.component';

const routes: Routes = [
  { path: '', component: CreateRecipesComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
