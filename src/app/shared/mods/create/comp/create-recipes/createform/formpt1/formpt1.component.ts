import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formpt1',
  templateUrl: './formpt1.component.html',
  styleUrls: ['./formpt1.component.scss']
})
export class Formpt1Component implements OnInit {

  constructor() { }

  authorName: String = "asdasd";
  recipeTitle: String = "asdasd";
  recipeDesc: String = "asdasd";

  ngOnInit() {
  }

}
