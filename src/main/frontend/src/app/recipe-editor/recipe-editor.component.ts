import {Component, OnInit, ViewChild} from '@angular/core';
import {exampleRecipe, Recipe} from "../recipe-page/recipe.model";
import {MatDialog} from "@angular/material/dialog";
import {SafeUrl} from '@angular/platform-browser';
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe-editor',
  templateUrl: './recipe-editor.component.html',
  styleUrls: ['./recipe-editor.component.scss']
})
export class RecipeEditorComponent {
  public recipe: Recipe = exampleRecipe;
  public recipeWidth = 30;
  doublePage: boolean = false;
  selectedFiles: File[] | undefined;

  constructor() {
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
    setTimeout(() => window.print());
  }

  doublePageToggle() {
    this.doublePage = !this.doublePage;
    if (this.doublePage && this.recipeWidth > 50) {
      this.recipeWidth = 50;
    }
  }

  initRecipe(): Recipe {
    return {
      ingredients: [],
      steps: [],
      title: ''
    }
  }

  downloadURI() {
    const blob = new Blob([JSON.stringify(this.recipe)], {type: 'application/json'});
    const uri = window.URL.createObjectURL(blob);
    //window.location.assign(uri);

    var a = document.createElement('a');
    a.href = uri;
    a.download = this.recipe.title ? this.recipe.title : 'untitled recipe'
    console.log(a.href, a.download)
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  updateCurrentRecipe(e: any) {
    let reader = new FileReader();
    reader.onload = () => {
      this.recipe = JSON.parse(reader.result as string);
    };
    reader.readAsText(e.target.files[0], 'utf-8');
  }
}
