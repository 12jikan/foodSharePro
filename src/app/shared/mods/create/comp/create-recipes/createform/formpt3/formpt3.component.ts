import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formpt3',
  templateUrl: './formpt3.component.html',
  styleUrls: ['./formpt3.component.scss']
})
export class Formpt3Component implements OnInit {

  constructor() { }

  // steps 
  stepInput: String = "";

  // For the Html Template 
  amtTime;
  stepsArr = [];
  timeArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

  ngOnInit() {
  }

  addStep() {
    let stepObj = {
      step: this.stepInput,
      minutes: this.amtTime,
    };

    this.stepsArr.push(stepObj);
    console.log(this.stepsArr);
  }

}
