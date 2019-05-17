import { Component, OnInit } from '@angular/core';
import { AssetService } from 'src/app/shared/services/assets.service';

@Component({
  selector: 'app-formpt2',
  templateUrl: './formpt2.component.html',
  styleUrls: ['./formpt2.component.scss']
})
export class Formpt2Component implements OnInit {

  constructor(private _assets: AssetService) { }
  reqTools: Object;
  reqIngredients: Object;

  tool = "Select Dropdown";
  ingredient = "Select Dropdown";

  toolsTable = [];
  ingredientsTable = [];

  ngOnInit() {
    this.getIngredients();
    this.getTools();
  }

  // add ingredients that is to be used
  addIngredients() {
    if (!this.ingredientsTable.includes(this.ingredient)) {
      if (this.ingredient == "Select Dropdown") {
        console.log("can't add this!")
        return true;
      }

      this.ingredientsTable.push(this.ingredient);
      console.log(this.ingredientsTable);

    }
    else {
      console.log('it\'s already in there!')
    }

  }

  // method is for adding tools that is to be used
  addTools() {
    if(!this.toolsTable.includes(this.tool)) {
      if(this.tool == "Select Dropdown") {
        console.log("can't add this!");
        return true;
      }
      this.toolsTable.push(this.tool);
      console.log(this.toolsTable);
    }
    else {
      console.log("it\'s already in there!")
    }
  }

  // http get request for the ingredients
  getIngredients() {
    this._assets.getIngredients().subscribe(data => {
      this.reqIngredients = data.assets;
      console.log(this.reqIngredients);
    });
  }

  // http get request for the tools
  getTools() {
    this._assets.getTools().subscribe(data => {
      this.reqTools = data.assets;
      console.log(this.reqTools);
    })
  }

}
