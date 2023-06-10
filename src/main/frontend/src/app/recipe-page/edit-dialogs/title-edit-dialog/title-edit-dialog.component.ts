import {Component, HostListener, Inject, OnDestroy, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-title-edit-dialog',
  templateUrl: './title-edit-dialog.component.html',
  styleUrls: ['./title-edit-dialog.component.scss']
})
export class TitleEditDialogComponent{

  @HostListener('document:keydown.enter', ['$event'])
  public onEnter($event: KeyboardEvent){
    this.dialogRef.close(this.title)
  }

  @HostListener('document:keydown.escape', ['$event'])
  public onEscape($event: KeyboardEvent){
    this.dialogRef.close(this.data.title)
  }

  public title: string;
  constructor(private dialogRef: MatDialogRef<TitleEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {title: string}) {
    this.title = this.data.title;
    this.dialogRef.backdropClick().subscribe(result => {
      this.dialogRef.close(this.data.title);
    });
  }
}
