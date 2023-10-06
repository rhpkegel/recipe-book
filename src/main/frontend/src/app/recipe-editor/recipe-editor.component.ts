import {Component} from '@angular/core';
import {exampleRecipe, exampleRecipeBook, Recipe} from "../recipe-page/recipe.model";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {RecipeService} from "../recipe.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-recipe-editor',
  templateUrl: './recipe-editor.component.html',
  styleUrls: ['./recipe-editor.component.scss']
})
export class RecipeEditorComponent {
  public activeRecipeIndex = 0;
  public recipes: Recipe[] = this.recipeService.getRecipes();
  public cookbookTitle = new FormControl(this.recipes[this.activeRecipeIndex].title);

  public printing = false;
  public recipeWidth = 30;
  public doublePage: boolean = true;
  public selectedRecipes: File[] | undefined;
  public recipeIndexOffset: number = 2;

  public get selectedRecipe(): Recipe {
    return this.recipes[this.activeRecipeIndex];
  }

  constructor(public recipeService: RecipeService) {
  }

  zoomInRecipe() {
    this.recipeWidth += 10;
  }

  zoomOutRecipe() {
    this.recipeWidth -= 10;
  }

  printRecipe() {
    this.recipeWidth = 50;
    this.doublePage = true;
    this.printing = true;
    setTimeout(() => window.print());
    window.onafterprint = () => {
      this.recipeWidth = 30;
      this.printing = false;
    }
  }

  doublePageToggle() {
    this.doublePage = !this.doublePage;
    if (this.doublePage && this.recipeWidth > 50) {
      this.recipeWidth = 50;
    }
  }

  initRecipe(): void {
    const newRecipe = {
      ingredients: [],
      steps: [],
      title: ''
    };
    this.recipes.push(newRecipe);
    this.activeRecipeIndex = this.recipes.length - 1;
    this.recipeService.setRecipes(this.recipes);
  }

  downloadURI() {
    const blob = new Blob([JSON.stringify(this.recipes)], {type: 'application/json'});
    const uri = window.URL.createObjectURL(blob);

    var a = document.createElement('a');
    a.href = uri;
    a.download = this.cookbookTitle.value ? this.cookbookTitle.value : 'Cookbook'
    console.log(a.href, a.download)
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  updateCurrentRecipe(e: Event) {
    Array.from((e.target as HTMLInputElement).files as FileList).forEach((file: File) => {
      let reader = new FileReader();
      reader.onload = () => {
        const result = JSON.parse(reader.result as string);
        if (Array.isArray(result)){
          this.recipes = result;
          this.cookbookTitle.setValue(file.name.replace('.json', ''));
        } else {
          this.recipes.push(result);
        }
        this.recipeService.setRecipes(this.recipes);
      };
      reader.readAsText(file, 'utf-8')
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.recipes, event.previousIndex, event.currentIndex);
  }

  deleteRecipe(i: number) {
    this.recipes.splice(i, 1)
    this.recipeService.setRecipes(this.recipes);
  }

  showTableOfContents() {
    this.activeRecipeIndex = -1;
  }

  sortRecipes() {
    this.recipes = this.recipes.sort((a,b)=> a.title.localeCompare(b.title));
    this.recipeService.setRecipes(this.recipes);
  }
}
