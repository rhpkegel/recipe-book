import {Component, Inject} from '@angular/core';
import {BaseEditDialogDirective} from "../base-edit-dialog.directive";
import {FormControl} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-notes-edit-dialog',
  templateUrl: './notes-edit-dialog.component.html',
  styleUrls: ['./notes-edit-dialog.component.scss']
})
export class NotesEditDialogComponent extends BaseEditDialogDirective<NotesEditDialogComponent, string>{
  public form = new FormControl<string|null>(this.data);
  constructor(public dialogRef: MatDialogRef<NotesEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
    super(dialogRef,data);
  }
}
