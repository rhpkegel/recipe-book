import { Component, OnInit } from '@angular/core';
import {exampleRecipe, Recipe} from "../recipe-page/recipe.model";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-recipe-editor',
  templateUrl: './recipe-editor.component.html',
  styleUrls: ['./recipe-editor.component.scss']
})
export class RecipeEditorComponent{
  public recipe: Recipe = exampleRecipe;
  public recipeWidth = 30;
  doublePage: boolean = false;
  constructor(public dialog: MatDialog) { }

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
