import {AfterViewInit, Directive, HostListener, Inject} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TimeModel} from "./time-edit-dialog/time-edit-dialog.component";

@Directive({
  selector: '[appBaseEditDialog]'
})
export class BaseEditDialogDirective<T,K> implements AfterViewInit{

  public form: AbstractControl | undefined;
  constructor(public dialogRef: MatDialogRef<T>, @Inject(MAT_DIALOG_DATA) public data: K) {
    this.dialogRef.backdropClick().subscribe(result => {
      this.onAccept();
    });
  }
  @HostListener('keydown.control.enter')
  public onAccept(): void {
    this.dialogRef.close(this.form?.value);
  }
  public onCancel(): void {
    this.dialogRef.close(this.data);
  }

  ngAfterViewInit(): void {
    const focusable = document.querySelectorAll('input, textarea, [tabindex]:not([tabindex="-1"])');
    focusable.forEach((elem) => (elem as HTMLElement).focus())
  }
}
