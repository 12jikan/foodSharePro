import { Component, OnInit, ViewChild } from '@angular/core';
import { 
  AngularFireStorage, 
  AngularFireStorageReference, 
  AngularFireUploadTask 
} from '@angular/fire/storage';
import { Observable } from 'rxjs';

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
  downloadURL: Observable<any>;
  filepath: String;
  percentage;

  selectedFile = null;

  ngOnInit() {
  }

  onFileSelect(event) {
    this.selectedFile = event[0];
    console.log(this.selectedFile)
  };

  uploadFile() {
    const file = this.selectedFile;
    const filePath = 'foodsharepics/' + 'test' + 'foodshareapi';
    this.ref = this.afStorage.ref(filePath);
    this.task = this.afStorage.upload(filePath, file);
    this.downloadURL = this.ref.getDownloadURL();
    console.log(this.downloadURL);
    // const _task = _ref.put(_file)

    console.log(filePath);
  };
}
