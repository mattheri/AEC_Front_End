import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Forfait } from 'src/forfait';

@Component({
  selector: 'app-updatedialog',
  templateUrl: './updatedialog.component.html',
  styleUrls: ['./updatedialog.component.scss'],
})
export class UpdatedialogComponent implements OnInit {
  local_data: Forfait;
  constructor(
    public dialogRef: MatDialogRef<UpdatedialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Forfait
  ) {
    console.log(data);
    this.local_data = data;
  }

  do() {
    this.dialogRef.close({ event: this.local_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  ngOnInit(): void {}
}
