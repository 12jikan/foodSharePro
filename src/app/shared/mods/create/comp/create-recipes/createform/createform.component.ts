import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { RecipeService } from '../../../../../services/recipes.service';
import { AssetService } from '../../../../../services/assets.service';

import { Formpt1Component } from './formpt1/formpt1.component';
import { Formpt2Component } from './formpt2/formpt2.component';
import { Formpt3Component } from './formpt3/formpt3.component';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.scss']
})
export class CreateformComponent implements OnInit, AfterViewInit {

  constructor(private _recipes: RecipeService, private _assets: AssetService) { }

  
  
  @ViewChild(Formpt1Component) formpt1;
  @ViewChild(Formpt2Component) formpt2;
  @ViewChild(Formpt3Component) formpt3;
  
  // posting object
  postObj = {
    name:  "",
    title: "",
    desc:  "",
    assets: {
      tools: [],
      ingredients: [],
    },
    steps:  [],
  }
  

  tools: Object;
  ingredients: Object;

  // steps
  stepInput: String = "";
  
  
  // For the Html Template
  stepsArr = [];
  amtTime;
  timeArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.postObj.name = this.formpt1.authorName;
    this.postObj.title = this.formpt1.recipeTitle;
    this.postObj.desc = this.formpt1.recipeDesc;

    this.postObj.assets.tools = this.formpt2.toolsTable;
    this.postObj.assets.ingredients = this.formpt2.ingredientsTable;

    console.log(this.postObj)
  }

  // http post for adding the recipe instructions
  postRecipe() {
    this._recipes.postRecipe(this.postObj);
  }
  test(x){
    console.log(x);
  }

  addStep() {
    let stepObj = {
      step: this.stepInput,
      minutes: this.amtTime,
    };
    this.postObj.steps.push(stepObj);
    console.log(this.postObj.steps);
  }

}
