import {AfterViewChecked, AfterViewInit, Component, HostListener, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface TimeModel {
  prep: number;
  cook: number;
}

@Component({
  selector: 'app-time-edit-dialog',
  templateUrl: './time-edit-dialog.component.html',
  styleUrls: ['./time-edit-dialog.component.scss']
})
export class TimeEditDialogComponent{

  public form = this.fb.group(this.data);
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<TimeEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: TimeModel) {
    this.dialogRef.backdropClick().subscribe(result => {
      this.dialogRef.close(this.data);
    });
  }
  @HostListener('document:keydown.enter', ['$event'])
  public onAccept(): void {
    this.dialogRef.close(this.form.value);
    console.log(this.form.value)
  }

  @HostListener('document:keydown.escape', ['$event'])
  public onCancel(): void {
    this.dialogRef.close(this.data);
  }
}
