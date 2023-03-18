import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {exampleRecipe, Recipe} from "./recipe-page/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() {
  }

  public getRecipes(): Observable<Recipe[]> {
    return of([exampleRecipe])
  }
}
