import { Component, OnInit } from '@angular/core';
import { Forfait } from 'src/forfait';
import { ForfaitsService } from '../forfaits.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { UpdatedialogComponent } from '../updatedialog/updatedialog.component';
import { CreatedialogComponent } from '../createdialog/createdialog.component';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss'],
})
export class AdministrationComponent implements OnInit {
  constructor(
    private forfaitsService: ForfaitsService,
    public dialog: MatDialog
  ) {}
  forfaitsDispo: Forfait[];
  updateData: Forfait;

  createForfait(data: Forfait) {
    this.forfaitsService.addForfait(data).subscribe();
  }

  openUpdateModal(data: Forfait) {
    const dialogRef = this.dialog.open(UpdatedialogComponent, { data });

    dialogRef.afterClosed().subscribe(() => this.getForfaits());
  }

  openCreateModal() {
    const dialogRef = this.dialog.open(CreatedialogComponent, {
      data: this.forfaitsDispo,
    });

    dialogRef.afterClosed().subscribe(() => this.getForfaits());
  }

  ngOnInit() {
    this.getForfaits();
  }

  getForfaits() {
    this.forfaitsService
      .getForfaits()
      .subscribe((result) => (this.forfaitsDispo = result));
  }

  deleteForfait(id: string) {
    this.forfaitsService
      .deleteForfait(id)
      .subscribe(
        (result) =>
          (this.forfaitsDispo = this.forfaitsDispo.filter(
            (forfait) => forfait._id !== id
          ))
      );
  }

  displayedColumns = ['nom', 'dateDepart', 'dateRetour', 'prix', 'control'];
}
