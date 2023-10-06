import {AfterViewInit, Component, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl} from "@angular/forms";
import {BaseEditDialogDirective} from "../base-edit-dialog.directive";
import {RecipeService} from "../../../recipe.service";
import {MatAutocompleteTrigger} from "@angular/material/autocomplete";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-tag-edit-dialog',
  templateUrl: './tag-edit-dialog.component.html',
  styleUrls: ['./tag-edit-dialog.component.scss']
})
export class TagEditDialogComponent extends BaseEditDialogDirective<TagEditDialogComponent, string[]>{
  public form = this.fb.array(this.data);
  public tagOptions: string[] = this.knownTags;
  public filteredTagOptions: Observable<string[]> | undefined;
  public focusedFormControl: FormControl<string | null> | undefined;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<TagEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string[], public recipeService: RecipeService) {
    super(dialogRef, data)
  }

  public addTag() {
    this.form.push(new FormControl(''))
  }

  ngOnInit(): void {
    this.filteredTagOptions = this.form.valueChanges.pipe(
      startWith(''),
      map(() => this.filterTagOptions(this.focusedFormControl?.value || '')),
    );
  }

  private filterTagOptions(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.tagOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  private get knownTags(): string[] {
    let result: string[] = [];
    this.recipeService.getRecipes().forEach(r => result = result.concat(r.tags ? r.tags : []))
    result = [...new Set(result)].sort((a,b)=> a.localeCompare(b));
    return result;
  }

  onTagFocus(tag: FormControl<string | null>) {
    this.focusedFormControl = tag;
    this.focusedFormControl.updateValueAndValidity({onlySelf: false, emitEvent: true});
  }
}
