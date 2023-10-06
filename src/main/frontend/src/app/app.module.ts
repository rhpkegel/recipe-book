import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RecipePageComponent} from './recipe-page/recipe-page.component';
import {FormatUnitPipe} from './recipe-page/format-unit.pipe';
import {RecipeEditorComponent} from './recipe-editor/recipe-editor.component';
import {NgIconsModule} from "@ng-icons/core";
import {
  heroArrowLeft,
  heroArrowRight,
  heroBookOpen,
  heroChevronDown, heroChevronUp,
  heroDocument,
  heroMagnifyingGlassMinus,
  heroMagnifyingGlassPlus,
  heroPlus, heroQueueList, heroRectangleStack,
  heroXMark
} from "@ng-icons/heroicons/outline";
import {AngularResizeEventModule} from "angular-resize-event";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {TitleEditDialogComponent} from './recipe-page/edit-dialogs/title-edit-dialog/title-edit-dialog.component';
import {TimeEditDialogComponent} from './recipe-page/edit-dialogs/time-edit-dialog/time-edit-dialog.component';
import {TagEditDialogComponent} from './recipe-page/edit-dialogs/tag-edit-dialog/tag-edit-dialog.component';
import {
  IngredientEditDialogComponent
} from './recipe-page/edit-dialogs/ingredient-edit-dialog/ingredient-edit-dialog.component';
import {StepEditDialogComponent} from './recipe-page/edit-dialogs/step-edit-dialog/step-edit-dialog.component';
import {NotesEditDialogComponent} from './recipe-page/edit-dialogs/notes-edit-dialog/notes-edit-dialog.component';
import {MatListModule} from "@angular/material/list";
import {MatSelectModule} from "@angular/material/select";
import { BaseEditDialogDirective } from './recipe-page/edit-dialogs/base-edit-dialog.directive';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { TableOfContentsPageComponent } from './table-of-contents-page/table-of-contents-page.component';
import { CategoryEditDialogComponent } from './recipe-page/edit-dialogs/category-edit-dialog/category-edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipePageComponent,
    FormatUnitPipe,
    RecipeEditorComponent,
    TitleEditDialogComponent,
    TimeEditDialogComponent,
    TagEditDialogComponent,
    IngredientEditDialogComponent,
    StepEditDialogComponent,
    NotesEditDialogComponent,
    BaseEditDialogDirective,
    TableOfContentsPageComponent,
    CategoryEditDialogComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgIconsModule.withIcons({
            heroMagnifyingGlassPlus,
            heroMagnifyingGlassMinus,
            heroBookOpen,
            heroXMark,
            heroPlus,
            heroChevronUp,
            heroChevronDown,
            heroQueueList,
            heroArrowLeft,
            heroArrowRight,
            heroRectangleStack
        }),
        AngularResizeEventModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatListModule,
        MatSelectModule,
        DragDropModule,
        MatAutocompleteModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
