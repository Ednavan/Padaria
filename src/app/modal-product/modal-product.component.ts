import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.css']
})
export class ModalProductComponent {

  public modalData = { name: null, value: null, type: null }
  type = 'criar'

  constructor(
    public dialogRef: MatDialogRef<ModalProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    Object.assign(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
