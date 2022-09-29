import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {
  public tags: string[] = ['lekker', 'hoofdgerecht'];
  public ingredients: string[] = ['500g suiker', '50g boter'];
  steps: string[] = ['mixen', 'bakken', 'eten'];

  constructor() { }

  ngOnInit(): void {
  }

}
