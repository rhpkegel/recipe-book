import {Component, Input} from '@angular/core';
import {ResizedEvent} from "angular-resize-event";
import {RecipeService} from "../recipe.service";
import {IndexEntry} from "./index.model";

export const INDEX_PAGE_SIZE = 80;

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent{

  private _indexPageNumber: number = 0;

  @Input()
  public width: number = 50;
  public fontSize: number = 16;
  public indexPageSize: number = INDEX_PAGE_SIZE;
  public indexEntries: IndexEntry[] = this.indexSlice;
  @Input()
  public set indexPageNumber(index: number){
    this._indexPageNumber = index;
    this.indexEntries = this.indexSlice;
  };
  get indexSlice(): IndexEntry[]{
    return this.recipeService.getIndexEntries().slice(this._indexPageNumber*this.indexPageSize, (this._indexPageNumber+1)*this.indexPageSize);
  }
  constructor(private recipeService: RecipeService) {}

  public onPageResize($event: ResizedEvent) {
    this.fontSize = $event.newRect.width / 50;
  }
}
