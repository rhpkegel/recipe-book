import {Component, HostListener, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder} from "@angular/forms";
import {TimeModel} from "../time-edit-dialog/time-edit-dialog.component";

@Component({
  selector: 'app-step-edit-dialog',
  templateUrl: './step-edit-dialog.component.html',
  styleUrls: ['./step-edit-dialog.component.scss']
})
export class StepEditDialogComponent {
  public form = this.fb.group(this.data);

  @HostListener('document:keydown.enter', ['$event'])
  public onEnter() {
    this.dialogRef.close(this.form.value);
  }

  @HostListener('document:keydown.escape', ['$event'])
  public onEscape() {
    this.dialogRef.close(this.data)
  }

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<StepEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: TimeModel) {
    this.dialogRef.backdropClick().subscribe(result => {
      this.dialogRef.close(this.data);
    });
  }
}
