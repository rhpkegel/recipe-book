import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { FormatUnitPipe } from './recipe-page/format-unit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RecipePageComponent,
    FormatUnitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
