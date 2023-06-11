import {Directive, HostListener, Inject} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TimeModel} from "./time-edit-dialog/time-edit-dialog.component";

@Directive({
  selector: '[appBaseEditDialog]'
})
export class BaseEditDialogDirective<T,K> {

  public form: AbstractControl | undefined;
  constructor(public dialogRef: MatDialogRef<T>, @Inject(MAT_DIALOG_DATA) public data: K) {
    this.dialogRef.backdropClick().subscribe(result => {
      this.dialogRef.close(this.data);
    });
  }
  @HostListener('document:keydown.enter', ['$event'])
  public onAccept(): void {
    this.dialogRef.close(this.form?.value);
  }

  @HostListener('document:keydown.escape', ['$event'])
  public onCancel(): void {
    this.dialogRef.close(this.data);
  }
}
