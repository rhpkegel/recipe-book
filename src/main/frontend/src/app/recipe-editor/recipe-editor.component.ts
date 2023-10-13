import {Component} from '@angular/core';
import {Recipe} from "../recipe-page/recipe.model";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {RecipeService} from "../recipe.service";
import {FormControl} from "@angular/forms";
import {Ingredient, IngredientSublist} from "../recipe-page/ingredient.model";
import {TOC_PAGE_SIZE} from "../table-of-contents-page/table-of-contents-page.component";
import {INDEX_PAGE_SIZE} from "../index-page/index-page.component";

@Component({
  selector: 'app-recipe-editor',
  templateUrl: './recipe-editor.component.html',
  styleUrls: ['./recipe-editor.component.scss']
})
export class RecipeEditorComponent {
  public activeRecipeIndex = -1;
  public recipes: Recipe[] = this.recipeService.getRecipes();
  public cookbookTitle = new FormControl('Untitled');
  public searchString = new FormControl('');

  public printing = true;
  public recipeWidth = 30;
  public doublePage: boolean = true;
  public selectedRecipes: File[] | undefined;
  public recipeIndexOffset: number = 1;

  get tocPageCount(): number{
    return Math.ceil(this.recipes.length/TOC_PAGE_SIZE);
  }

  get indexPageCount(): number{
    return Math.ceil(this.recipeService.getIndexEntries().length/INDEX_PAGE_SIZE);
  }

  get filteredRecipes(): Recipe[]{
    if (this.searchString.value) {
      const lowerSearchTerms = this.searchString.value.toLowerCase().split(/\s+/);
      return this.recipes
        .filter(r =>
            lowerSearchTerms.every( term =>
            this.includesTitle(r, term) ||
            this.includesTag(r, term) ||
            this.includesIngredient(r, term) ||
            this.includesCategory(r, term)))
    } else {
      return this.recipes;
    }
  }

  constructor(public recipeService: RecipeService) {}

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

  showIndex() {
    this.activeRecipeIndex = this.recipes.length
  }
  private includesTitle(recipe: Recipe, searchTerm: string): boolean{
    return recipe.title.toLowerCase().includes(searchTerm);
  }

  private includesTag(recipe: Recipe, searchTerm: string): boolean{
    if(recipe.tags){
      return recipe.tags.findIndex(tag => tag.toLowerCase().includes(searchTerm)) >= 0
    }
    else return false;
  }

  private includesCategory(recipe: Recipe, searchTerm: string): boolean{
    if(recipe.category){
      return recipe.category.toLowerCase().includes(searchTerm);
    }
    else return false;
  }

  private includesIngredient(recipe: Recipe, searchTerm: string): boolean{
    if(recipe.ingredients){
      return recipe.ingredients
          // @ts-ignore
          .flatMap((x: IngredientSublist) => x.ingredients)
          .findIndex((ingredient: Ingredient) => ingredient.name.toLowerCase().includes(searchTerm)) >= 0
    }
    else return false;
  }

  protected readonly Array = Array;
  protected readonly Math = Math;
}
