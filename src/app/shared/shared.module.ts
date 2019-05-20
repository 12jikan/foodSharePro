import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedRoutingModule } from './shared-routing.module';
import { CreateModule } from './mods/create/create.module';
import { RecipeService } from './services/recipes.service';
import { AssetService } from './services/assets.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CreateModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDvNT8tUs6isteNsaej394F-zSjQc_NF7o",
      authDomain: "foodshare-4ef7c.firebaseapp.com",
      databaseURL: "https://foodshare-4ef7c.firebaseio.com",
      projectId: "foodshare-4ef7c",
      storageBucket: "foodshare-4ef7c.appspot.com",
      messagingSenderId: "387701092612",
      appId: "1:387701092612:web:5b5d647facbdaae4"
    }),
    AngularFireStorageModule
  ],
  exports: [
    SharedRoutingModule
  ],
  providers: [
    RecipeService,
    AssetService,
  ]
})
export class SharedModule { }
