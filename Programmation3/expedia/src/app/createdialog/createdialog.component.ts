import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Forfait } from 'src/forfait';

@Component({
  selector: 'app-createdialog',
  templateUrl: './createdialog.component.html',
  styleUrls: ['./createdialog.component.scss'],
})
export class CreatedialogComponent implements OnInit {
  local_data: Forfait;
  constructor(
    public dialogRef: MatDialogRef<CreatedialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Forfait
  ) {
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
