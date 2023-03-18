import { Component, OnInit } from '@angular/core';
import {exampleRecipe, Recipe} from "../recipe-page/recipe.model";

@Component({
  selector: 'app-recipe-editor',
  templateUrl: './recipe-editor.component.html',
  styleUrls: ['./recipe-editor.component.scss']
})
export class RecipeEditorComponent implements OnInit {
  public recipe: Recipe = exampleRecipe;
  public recipeWidth = 50;
  constructor() { }

  ngOnInit(): void {
  }

  zoomInRecipe(){
    this.recipeWidth += 10;
  }
  zoomOutRecipe(){
    this.recipeWidth -= 10;
  }
}
