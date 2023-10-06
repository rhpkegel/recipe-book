import {Component, Inject, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RecipeService} from "../../../recipe.service";
import {BaseEditDialogDirective} from "../base-edit-dialog.directive";
import {map, Observable, startWith, tap} from "rxjs";

@Component({
  selector: 'app-category-edit-dialog',
  templateUrl: './category-edit-dialog.component.html',
  styleUrls: ['./category-edit-dialog.component.scss']
})
export class CategoryEditDialogComponent extends BaseEditDialogDirective<CategoryEditDialogComponent, string> implements OnInit{
  public form = new FormControl<string>(this.data);
  public categoryOptions: string[] = this.knownCategories;
  public filteredCategoryOptions: Observable<string[]> | undefined;

  constructor(public dialogRef: MatDialogRef<CategoryEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: string,
              public recipeService: RecipeService) {
    super(dialogRef, data)
  }

  private filterCategoryOptions(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.categoryOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  private get knownCategories(): string[] {
    let result: string[] = [];
    this.recipeService.getRecipes().forEach(r => result = result.concat(r.category ? r.category : []))
    result = [...new Set(result)].sort((a, b) => a.localeCompare(b));
    return result;
  }

  ngOnInit(): void {
    this.filteredCategoryOptions = this.form.valueChanges.pipe(
      startWith(''),
      map(value => this.filterCategoryOptions(value || '')),
    );
  }
}
