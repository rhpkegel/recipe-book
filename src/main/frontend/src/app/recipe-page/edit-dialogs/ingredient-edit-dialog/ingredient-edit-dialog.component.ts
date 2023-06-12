import {Component, HostListener, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Form, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Ingredient, IngredientSublist} from "../../ingredient.model";
import {MeasurementUnit, unitShortNames} from "../../measurement-unit.model";
import {BaseEditDialogDirective} from "../base-edit-dialog.directive";


interface IngredientSubListForm {
  name: FormControl<string | null>;
  ingredients: FormArray<FormGroup<IngredientForm>>;
}

interface IngredientForm {
  name: FormControl<string | null>;
  amount: FormControl<number | null>;
  unit: FormControl<MeasurementUnit | null>;
}

@Component({
  selector: 'app-ingredient-edit-dialog',
  templateUrl: './ingredient-edit-dialog.component.html',
  styleUrls: ['./ingredient-edit-dialog.component.scss']
})
export class IngredientEditDialogComponent extends BaseEditDialogDirective<IngredientEditDialogComponent, IngredientSublist[]> {
  public form = new FormArray<FormGroup<IngredientSubListForm>>([]);

  get unitOptions(): string[] {
    return Object.keys(unitShortNames);
  }

  constructor(public dialogRef: MatDialogRef<IngredientEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: IngredientSublist[]) {
    super(dialogRef, data);
    this.initializeForm();
  }

  @HostListener('keydown.escape', ['$event'])
  escapeHandler($event: KeyboardEvent): void {
    if (document.getElementsByTagName('mat-option').length > 0) {

    }
  }

  private initializeForm(): void {
    this.data.forEach(subList => {
      this.form.push(this.initializeSubListForm(subList))
    })
    if (this.data.length == 0) {
      this.form.push(this.initializeSubListForm({name: '', ingredients: []}));
    }
  }

  private initializeSubListForm(sublist: IngredientSublist): FormGroup<IngredientSubListForm> {
    let ingredientForms: FormGroup<IngredientForm>[] = sublist.ingredients.map(ingredient => this.initializeIngredientForm(ingredient));
    if (ingredientForms.length == 0) {
      ingredientForms = [this.initializeIngredientForm({name: ''})]
    }
    return new FormGroup({
      name: new FormControl<string | null>(sublist.name ? sublist.name : ''),
      ingredients: new FormArray(ingredientForms)
    })
  }

  private initializeIngredientForm(ingredient: Ingredient): FormGroup<IngredientForm> {
    return new FormGroup<IngredientForm>({
      name: new FormControl<string | null>(ingredient.name),
      amount: new FormControl<number | null>(ingredient.amount ? ingredient.amount : null),
      unit: new FormControl<MeasurementUnit | null>(ingredient.unit ? ingredient.unit : null),
    })
  }

  removeIngredient(subListIndex: number, ingredientIndex: number) {
    this.form.controls[subListIndex].controls.ingredients.removeAt(ingredientIndex);
  }

  addIngredient(sublistIndex: number, ingredientIndex: number, after = true) {
    const insertIndex = after ? ingredientIndex + 1 : ingredientIndex;
    this.form.controls[sublistIndex].controls.ingredients.insert(insertIndex, this.initializeIngredientForm({name: ''}))
    this.setFocus(sublistIndex, insertIndex, 0);
  }

  removeSublist(subListIndex: number) {
    this.form.removeAt(subListIndex);
  }

  addSublist(sublistIndex: number, after = true) {
    this.form.insert(after ? sublistIndex + 1 : sublistIndex, this.initializeSubListForm({name: '', ingredients: []}))
  }

  setFocus(sublistIndex: any, ingredientIndex: number, elementIndex: number, $event?: Event) {
    const idQuery = `ingredient-${sublistIndex}-${ingredientIndex}-${elementIndex}`;
    $event?.preventDefault();
    setTimeout(() =>
      document.getElementById(idQuery)?.focus(), 0);
  }

  onBackspace(sublistIndex: number, ingredientIndex: number) {
    const control = this.form.controls[sublistIndex]?.controls.ingredients.controls[ingredientIndex]?.controls.name;
    if (!control?.value){
      this.form.controls[sublistIndex]?.controls.ingredients.removeAt(ingredientIndex);
      this.setFocus(sublistIndex, ingredientIndex > 0 ? ingredientIndex-1 : 0, 0);
    }
  }
}
