import { Component, OnInit } from '@angular/core';
import {exampleRecipe, Recipe} from "../recipe-page/recipe.model";
import {MatDialog} from "@angular/material/dialog";
import {RecipeEditDialogComponent} from "./recipe-edit-dialog/recipe-edit-dialog.component";

@Component({
  selector: 'app-recipe-editor',
  templateUrl: './recipe-editor.component.html',
  styleUrls: ['./recipe-editor.component.scss']
})
export class RecipeEditorComponent implements OnInit {
  public recipe: Recipe = exampleRecipe;
  public recipeWidth = 50;
  doublePage: boolean = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    const dialogRef = this.dialog.open(RecipeEditDialogComponent, {data: this.recipe})
    dialogRef.afterClosed().subscribe(result => {
      console.log('closed the dialog with data: ', result)
    })
  }

  zoomInRecipe(){
    this.recipeWidth += 10;
  }
  zoomOutRecipe(){
    this.recipeWidth -= 10;
  }

  printRecipe(){
    this.recipeWidth=50;
    this.doublePage=true;
    setTimeout(()=>window.print());
  }

  doublePageToggle() {
    this.doublePage = !this.doublePage;
    if (this.doublePage && this.recipeWidth > 50){
      this.recipeWidth = 50;
    }
  }
}
