import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'; // Required for material buttons
import Notiflix from 'notiflix';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
  imports: [MatDialogModule, MatButtonModule],  // Import Angular Material dialog and button modules
})
export class ConfirmDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true); // Close the dialog and return true
    Notiflix.Notify.success('Deleated successful!');
  }

  onCancel(): void {
    this.dialogRef.close(false); // Close the dialog and return false
  }
}
