import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { 
  AngularFireStorage, 
  AngularFireStorageReference, 
  AngularFireUploadTask 
} from '@angular/fire/storage';

@Component({
  selector: 'app-formpt1',
  templateUrl: './formpt1.component.html',
  styleUrls: ['./formpt1.component.scss']
})
export class Formpt1Component implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  constructor(private afStorage: AngularFireStorage) { }

  authorName: String;
  recipeTitle: String;
  recipeDesc: String;

  selectedFile = null;

  ngOnInit() {
  }

  onFileSelect(event) {
    this.selectedFile = event[0];
    console.log(this.selectedFile);
  };

  uploadFile() {
  };
}
