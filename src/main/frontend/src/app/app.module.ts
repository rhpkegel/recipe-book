import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RecipePageComponent} from './recipe-page/recipe-page.component';
import {FormatUnitPipe} from './recipe-page/format-unit.pipe';
import {RecipeEditorComponent} from './recipe-editor/recipe-editor.component';
import {NgIconsModule} from "@ng-icons/core";
import {heroBookOpen, heroMagnifyingGlassMinus, heroMagnifyingGlassPlus, heroXMark} from "@ng-icons/heroicons/outline";
import {AngularResizeEventModule} from "angular-resize-event";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import { TitleEditDialogComponent } from './recipe-page/edit-dialogs/title-edit-dialog/title-edit-dialog.component';
import { TimeEditDialogComponent } from './recipe-page/edit-dialogs/time-edit-dialog/time-edit-dialog.component';
import { TagEditDialogComponent } from './recipe-page/edit-dialogs/tag-edit-dialog/tag-edit-dialog.component';
import { IngredientEditDialogComponent } from './recipe-page/edit-dialogs/ingredient-edit-dialog/ingredient-edit-dialog.component';
import { StepEditDialogComponent } from './recipe-page/edit-dialogs/step-edit-dialog/step-edit-dialog.component';
import { NotesEditDialogComponent } from './recipe-page/edit-dialogs/notes-edit-dialog/notes-edit-dialog.component';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgIconsModule.withIcons({heroMagnifyingGlassPlus, heroMagnifyingGlassMinus, heroBookOpen, heroXMark}),
    AngularResizeEventModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
