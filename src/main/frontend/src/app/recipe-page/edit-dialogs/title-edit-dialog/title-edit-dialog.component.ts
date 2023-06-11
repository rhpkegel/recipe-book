import {Component, HostListener, Inject, OnDestroy, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {BaseEditDialogDirective} from "../base-edit-dialog.directive";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-title-edit-dialog',
  templateUrl: './title-edit-dialog.component.html',
  styleUrls: ['./title-edit-dialog.component.scss']
})
export class TitleEditDialogComponent extends BaseEditDialogDirective<TitleEditDialogComponent, string>{

  public form = new FormControl<string|null>(this.data);
  constructor(public dialogRef: MatDialogRef<TitleEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
    super(dialogRef,data);
  }
}
