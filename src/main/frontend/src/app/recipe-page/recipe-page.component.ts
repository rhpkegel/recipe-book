import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {exampleRecipe, Recipe} from "./recipe.model";
import {ResizedEvent} from "angular-resize-event";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {TitleEditDialogComponent} from "./edit-dialogs/title-edit-dialog/title-edit-dialog.component";
import {TimeEditDialogComponent, TimeModel} from "./edit-dialogs/time-edit-dialog/time-edit-dialog.component";
import {TagEditDialogComponent} from "./edit-dialogs/tag-edit-dialog/tag-edit-dialog.component";
import {IngredientEditDialogComponent} from "./edit-dialogs/ingredient-edit-dialog/ingredient-edit-dialog.component";
import {IngredientSublist} from "./ingredient.model";
import {StepEditDialogComponent} from "./edit-dialogs/step-edit-dialog/step-edit-dialog.component";
import {retry} from "rxjs";
import {NotesEditDialogComponent} from "./edit-dialogs/notes-edit-dialog/notes-edit-dialog.component";

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

  private activeDialogRef: MatDialogRef<any> | undefined;

  public get containerWidth(): string {
    return `${this.width}vw`;
  };

  public get containerFontSize(): string {
    return `${this.fontSize}px`
  }

  constructor(private dialog: MatDialog) {
  }

  public ngOnInit(): void
  {
    this.openStepDialog()
  }

  public onPageResize($event: ResizedEvent) {
    this.fontSize = $event.newRect.width / 50;
  }

  openTitleDialog() {
    this.activeDialogRef = this.dialog.open(TitleEditDialogComponent, {
      width: '30rem',
      data: this.recipe ? this.recipe?.title : ''
    });
    this.activeDialogRef.afterClosed().subscribe((newTitle: string) => {
      if (this.recipe) {
        this.recipe.title = newTitle
      }
    });
  }

  openTimeDialog() {
    this.activeDialogRef = this.dialog.open(TimeEditDialogComponent, {
      width: '30rem',
      data: {
        cookTime: this.recipe?.cookTimeMinutes,
        servings: this.recipe?.servings
      }
    });
    this.activeDialogRef.afterClosed().subscribe((returnData: TimeModel) => {
      if (this.recipe) {
        this.recipe.cookTimeMinutes = returnData.cookTime;
        this.recipe.servings = returnData.servings;
      }
    });
  }

  openTagDialog() {
    this.activeDialogRef = this.dialog.open(TagEditDialogComponent, {
      width: '30rem',
      maxHeight: '65rem',
      data: this.recipe?.tags ? this.recipe?.tags : []
    });
    this.activeDialogRef.afterClosed().subscribe((returnData: string[]) => {
      if (this.recipe) {
        this.recipe.tags = returnData;
      }
    });
  }

  openIngredientsDialog() {
    this.activeDialogRef = this.dialog.open(IngredientEditDialogComponent, {
      data: JSON.parse(JSON.stringify(this.recipe?.ingredients))
    });
    this.activeDialogRef.afterClosed().subscribe((returnData: IngredientSublist[]) => {
      if (this.recipe) {
        this.recipe.ingredients = returnData;
      }
    });
  }

  openStepDialog() {
    this.activeDialogRef = this.dialog.open(StepEditDialogComponent, {
      data: this.recipe?.steps ? this.recipe.steps : []
    });
    this.activeDialogRef.afterClosed().subscribe((returnData: string[]) => {
      if (this.recipe) {
        this.recipe.steps = returnData;
      }
    });
  }

  openNotesDialog() {
    this.activeDialogRef = this.dialog.open(NotesEditDialogComponent, {
      data: this.recipe?.notes ? this.recipe.notes : ''
    });
    this.activeDialogRef.afterClosed().subscribe((returnData: string) => {
      if (this.recipe) {
        this.recipe.notes = returnData;
      }
    });
  }
}
