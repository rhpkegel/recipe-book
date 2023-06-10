import {Component, HostListener, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {TimeModel} from "../time-edit-dialog/time-edit-dialog.component";

@Component({
  selector: 'app-tag-edit-dialog',
  templateUrl: './tag-edit-dialog.component.html',
  styleUrls: ['./tag-edit-dialog.component.scss']
})
export class TagEditDialogComponent {
  public form = this.fb.array(this.data);
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<TagEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string[]) {
    this.dialogRef.backdropClick().subscribe(result => {
      this.dialogRef.close(this.data);
    });
  }
  @HostListener('document:keydown.enter', ['$event'])
  public onAccept(): void {
    this.dialogRef.close(this.form.value);
  }

  @HostListener('document:keydown.escape', ['$event'])
  public onCancel(): void {
    this.dialogRef.close(this.data);
  }

  public addTag() {
    this.form.push(new FormControl(''))
  }
}
