import {Component, Input, OnInit} from '@angular/core';
import {exampleRecipe, Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {
  @Input()
  public recipe: Recipe = exampleRecipe;

  constructor() { }

  ngOnInit(): void {
  }
}
