import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {exampleRecipe, Recipe} from "./recipe.model";
import {ResizedEvent} from "angular-resize-event";

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecipePageComponent implements OnInit {
  @Input()
  public recipe: Recipe | undefined;
  @Input()
  public width: number = 50;
  public fontSize: number = 16;

  public get containerWidth(): string{
    return `${this.width}vw`;
  };

  public get containerFontSize(): string{
    return `${this.fontSize}px`
  }

  constructor() { }

  public ngOnInit(): void {
  }

  public onPageResize($event: ResizedEvent) {
    this.fontSize = $event.newRect.width/50;
  }
}
