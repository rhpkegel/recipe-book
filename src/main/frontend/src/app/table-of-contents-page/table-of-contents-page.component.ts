import {Component, Input} from '@angular/core';
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe-page/recipe.model";

@Component({
  selector: 'app-table-of-contents-page',
  templateUrl: './table-of-contents-page.component.html',
  styleUrls: ['./table-of-contents-page.component.scss']
})
export class TableOfContentsPageComponent {
  @Input()
  public width: number = 50;

  public fontSize: number = 16;

  public recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) {
    this.recipes = this.recipeService.getRecipes();
  }
}
