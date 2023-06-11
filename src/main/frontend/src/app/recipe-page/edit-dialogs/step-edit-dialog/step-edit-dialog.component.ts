import {Component, HostListener, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder} from "@angular/forms";
import {TimeModel} from "../time-edit-dialog/time-edit-dialog.component";
import {BaseEditDialogDirective} from "../base-edit-dialog.directive";

@Component({
  selector: 'app-step-edit-dialog',
  templateUrl: './step-edit-dialog.component.html',
  styleUrls: ['./step-edit-dialog.component.scss']
})
export class StepEditDialogComponent extends BaseEditDialogDirective<StepEditDialogComponent, TimeModel>{
  public form = this.fb.group(this.data);
  constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<StepEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: TimeModel) {
    super(dialogRef, data);
  }
}
