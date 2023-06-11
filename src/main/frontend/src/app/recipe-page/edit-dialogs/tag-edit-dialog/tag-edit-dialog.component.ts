import {Component, HostListener, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {TimeModel} from "../time-edit-dialog/time-edit-dialog.component";
import {BaseEditDialogDirective} from "../base-edit-dialog.directive";

@Component({
  selector: 'app-tag-edit-dialog',
  templateUrl: './tag-edit-dialog.component.html',
  styleUrls: ['./tag-edit-dialog.component.scss']
})
export class TagEditDialogComponent extends BaseEditDialogDirective<TagEditDialogComponent, string[]>{
  public form = this.fb.array(this.data);
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<TagEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string[]) {
    super(dialogRef,data)
  }
  public addTag() {
    this.form.push(new FormControl(''))
  }
}
