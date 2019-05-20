import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
