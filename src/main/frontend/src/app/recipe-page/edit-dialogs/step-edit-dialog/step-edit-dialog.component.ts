import {AfterViewInit, Component, ElementRef, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl} from "@angular/forms";
import {BaseEditDialogDirective} from "../base-edit-dialog.directive";

@Component({
  selector: 'app-step-edit-dialog',
  templateUrl: './step-edit-dialog.component.html',
  styleUrls: ['./step-edit-dialog.component.scss']
})
export class StepEditDialogComponent extends BaseEditDialogDirective<StepEditDialogComponent, string[]> {
  public form = this.fb.array(this.data);

  constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<StepEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string[], private elementRef: ElementRef) {
    super(dialogRef, data);
    if (this.data.length == 0) {
      this.addStep(0);
    }
  }

  addStep(i: number, after = true) {
    const insertIndex = after ? i + 1 : i;
    this.form.insert(insertIndex, new FormControl<string | null>(''))
    this.setFocus(insertIndex);
  }

  onBackspace(i: number) {
    if(!this.form.controls[i].value){
      this.form.removeAt(i);
      if(i > 0){
        this.setFocus(i-1);
      } else{
        this.setFocus(0);
      }
    }
  }

  setFocus(i: number) {
    setTimeout(() => document.getElementById(`step-${i}`)?.focus(), 0);
  }
}
