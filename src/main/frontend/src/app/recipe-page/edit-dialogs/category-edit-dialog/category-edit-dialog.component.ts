import {AfterViewInit, Component, Inject} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RecipeService} from "../../../recipe.service";
import {BaseEditDialogDirective} from "../base-edit-dialog.directive";

@Component({
    selector: 'app-category-edit-dialog',
    templateUrl: './category-edit-dialog.component.html',
    styleUrls: ['./category-edit-dialog.component.scss']
})
export class CategoryEditDialogComponent extends BaseEditDialogDirective<CategoryEditDialogComponent, string> implements AfterViewInit{
    public form = new FormControl<string>(this.data);
    public categoryOptions: string[] = this.knownCategories;

    constructor(public dialogRef: MatDialogRef<CategoryEditDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: string,
                public recipeService: RecipeService) {
        super(dialogRef, data)
    }

    private get knownCategories(): string[] {
        let result: string[] = [];
        this.recipeService.getRecipes().forEach(r => result = result.concat(r.category ? r.category : []))
        result = result.sort((a,b)=> a.localeCompare(b));
        return result;
    }
}
