import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalProductComponent } from './modal-product/modal-product.component';
import { AngularFireDatabase } from '@angular/fire/database';

import { map } from 'rxjs/operators'

import { FirebaseOperation } from '@angular/fire/database/interfaces';
import { Key } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'loremipsum';
  displayedColumns: string[] = ['name', 'value', 'functions'];
  dataSource: any;
  dbName = 'products'



  constructor(public dialog: MatDialog,
    private db: AngularFireDatabase) {

    this.dataSource = this.db.list(this.dbName)
      .snapshotChanges()
      .pipe(
        map(items => {
          return items.map(item => {
            return Object.assign({ key: item.payload.key }, item.payload.val())
          })
        })
      )
  }

  insert() {
    const dialogRef = this.dialog.open(ModalProductComponent, {
      width: '250px',
      data: { name: this.dbName }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.db.list(this.dbName).push(result);

      }
    });
  }

  edit(data: { key: FirebaseOperation; }) {
    const dialogRef = this.dialog.open(ModalProductComponent, {
      width: '250px',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.db.list(this.dbName).update(data.key, result)

      }
    });

  }

  delete(key: FirebaseOperation | undefined) {
    this.db.list(this.dbName).remove(key);
  }

}

