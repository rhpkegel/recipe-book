import {AfterViewChecked, AfterViewInit, Component, HostListener, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BaseEditDialogDirective} from "../base-edit-dialog.directive";

export interface TimeModel {
  servings: number;
  cookTime: number;
}

@Component({
  selector: 'app-time-edit-dialog',
  templateUrl: './time-edit-dialog.component.html',
  styleUrls: ['./time-edit-dialog.component.scss']
})
export class TimeEditDialogComponent extends BaseEditDialogDirective<TimeEditDialogComponent, TimeModel>{
  public form = this.fb.group(this.data);

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<TimeEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: TimeModel) {
   super(dialogRef, data);
  }
}
