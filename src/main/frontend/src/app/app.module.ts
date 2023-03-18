import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RecipePageComponent} from './recipe-page/recipe-page.component';
import {FormatUnitPipe} from './recipe-page/format-unit.pipe';
import {RecipeEditorComponent} from './recipe-editor/recipe-editor.component';
import {NgIconsModule} from "@ng-icons/core";
import {heroMagnifyingGlassMinus, heroMagnifyingGlassPlus} from "@ng-icons/heroicons/outline";
import {AngularResizeEventModule} from "angular-resize-event";

@NgModule({
  declarations: [
    AppComponent,
    RecipePageComponent,
    FormatUnitPipe,
    RecipeEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({heroMagnifyingGlassPlus, heroMagnifyingGlassMinus}),
    AngularResizeEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
