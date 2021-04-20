import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';

import { ModalProductComponent } from './modal-product/modal-product.component';

import { MatDialogModule } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';

import { AngularFireDatabaseModule } from '@angular/fire/database';



@NgModule({
  declarations: [
    AppComponent,
    ModalProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    AngularFireDatabaseModule,

    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAywifrgNgK1iQTGLKQUaNJUeOhW_-LIrY",
      authDomain: "angularpadaria.firebaseapp.com",
      databaseURL: "https://angularpadaria-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "angularpadaria",
      storageBucket: "angularpadaria.appspot.com",
      messagingSenderId: "443312172598",
      appId: "1:443312172598:web:81c1b1ae2957f2c2fbb297",
      measurementId: "G-V4SZT2WY29"
    })



  ],

  entryComponents: [

    ModalProductComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
