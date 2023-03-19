import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RecipePageComponent} from './recipe-page/recipe-page.component';
import {FormatUnitPipe} from './recipe-page/format-unit.pipe';
import {RecipeEditorComponent} from './recipe-editor/recipe-editor.component';
import {NgIconsModule} from "@ng-icons/core";
import {heroBookOpen, heroMagnifyingGlassMinus, heroMagnifyingGlassPlus} from "@ng-icons/heroicons/outline";
import {AngularResizeEventModule} from "angular-resize-event";
import { RecipeEditDialogComponent } from './recipe-editor/recipe-edit-dialog/recipe-edit-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RecipePageComponent,
    FormatUnitPipe,
    RecipeEditorComponent,
    RecipeEditDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({heroMagnifyingGlassPlus, heroMagnifyingGlassMinus, heroBookOpen}),
    AngularResizeEventModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
