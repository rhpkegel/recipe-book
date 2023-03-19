import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Recipe} from "../../recipe-page/recipe.model";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {MeasurementUnit} from "../../recipe-page/measurement-unit.model";

@Component({
  selector: 'app-recipe-edit-dialog',
  templateUrl: './recipe-edit-dialog.component.html',
  styleUrls: ['./recipe-edit-dialog.component.scss']
})
export class RecipeEditDialogComponent implements OnInit{
  public form = new FormGroup({
    title: new FormControl(''),
    prepTime: new FormControl<number|null>(null),
    cookTime: new FormControl<number|null>(null),
    tags: new FormArray([
      new FormControl('')
    ]),
    ingredients: new FormArray([
      new FormGroup({
        amount: new FormControl<number | null>(null),
        unit: new FormControl<MeasurementUnit | null>('gram'),
        type: new FormControl('')
      })
    ]),
    steps: new FormArray([
      new FormControl('')
    ]),
    notes: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<RecipeEditDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: Recipe){
  }

  ngOnInit(): void {
    console.log('dialog opened with data:', this.data);
  }

}
