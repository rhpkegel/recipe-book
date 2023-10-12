import {Injectable} from '@angular/core';
import {exampleRecipeBook, Recipe} from "./recipe-page/recipe.model";
import {IndexEntry} from "./index-page/index.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = exampleRecipeBook;
  constructor() {
    //this.padRecipeBook(25)
  }

  private padRecipeBook(times: number){
    let result = this.recipes;
    for(let i = 0; i<= times; i++){
      result = result.concat(this.recipes);
    }
    this.recipes = result;
  }

  public getRecipes(): Recipe[] {
    return this.recipes;
  }

  public getIndexEntries(): IndexEntry[] {
    let sortedEntries: IndexEntry[] = this.recipes.map((e, i)=>
        ({
          name: e.title,
          pageNumber: i+1,
          category: e.category ? e.category : 'Overig'
        })).sort((e1,e2)=>{
      const catSort = e1.category.localeCompare(e2.category);
      if (catSort !== 0){
        return catSort
      } else{
        return e1.name.localeCompare(e2.name);
      }
    });

    let insertIndexes = sortedEntries.map((e,i)=>(i !== 0 && e.category !== sortedEntries[i-1].category) ? i : -1).filter(i => i > 0)
    insertIndexes = [0, ...insertIndexes]

    insertIndexes.reverse().forEach(i => {
      sortedEntries.splice(i, 0, {name: sortedEntries[i].category, category: sortedEntries[i].category})
    });

    return sortedEntries;
  }

  public setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
  }
}
