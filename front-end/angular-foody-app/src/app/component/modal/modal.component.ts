import { Component } from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(public dialogRef: MatDialogRef<ModalComponent>){

  }
  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
  
  

}
