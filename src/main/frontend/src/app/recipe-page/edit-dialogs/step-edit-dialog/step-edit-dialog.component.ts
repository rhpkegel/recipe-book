import {Component, HostListener, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl} from "@angular/forms";
import {TimeModel} from "../time-edit-dialog/time-edit-dialog.component";
import {BaseEditDialogDirective} from "../base-edit-dialog.directive";

@Component({
  selector: 'app-step-edit-dialog',
  templateUrl: './step-edit-dialog.component.html',
  styleUrls: ['./step-edit-dialog.component.scss']
})
export class StepEditDialogComponent extends BaseEditDialogDirective<StepEditDialogComponent, string[]>{
  public form = this.fb.array(this.data);
  constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<StepEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string[]) {
    super(dialogRef, data);
  }
  addStep(i: number, after = true) {
    this.form.insert(after ? i + 1 : i, new FormControl<string|null>(''))
  }
}
