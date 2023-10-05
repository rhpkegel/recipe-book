import {Component, HostListener, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {TimeModel} from "../time-edit-dialog/time-edit-dialog.component";
import {BaseEditDialogDirective} from "../base-edit-dialog.directive";
import {RecipeService} from "../../../recipe.service";

@Component({
  selector: 'app-tag-edit-dialog',
  templateUrl: './tag-edit-dialog.component.html',
  styleUrls: ['./tag-edit-dialog.component.scss']
})
export class TagEditDialogComponent extends BaseEditDialogDirective<TagEditDialogComponent, string[]> {
  public form = this.fb.array(this.data);
  public tagOptions: string[] = this.knownTags;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<TagEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string[], public recipeService: RecipeService) {
    super(dialogRef, data)
  }

  public addTag() {
    this.form.push(new FormControl(''))
  }

  private get knownTags(): string[] {
    let result: string[] = [];
    this.recipeService.getRecipes().forEach(r => result = result.concat(r.tags ? r.tags : []))
    return result;
  }

}
