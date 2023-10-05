import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {exampleRecipe, Recipe} from "./recipe-page/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [exampleRecipe];
  constructor() {
  }

  public getRecipes(): Recipe[] {
    return this.recipes;
  }

  public setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
  }
}
