import {Component, Input, OnInit, Output} from '@angular/core';
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe-page/recipe.model";
import {ResizedEvent} from "angular-resize-event";

@Component({
    selector: 'app-table-of-contents-page',
    templateUrl: './table-of-contents-page.component.html',
    styleUrls: ['./table-of-contents-page.component.scss']
})
export class TableOfContentsPageComponent implements OnInit{

    private _indexPageNumber: number = 0;

    @Input()
    public width: number = 50;
    @Input()
    public set indexPageNumber(i: number) {
        this._indexPageNumber = i;
        this.updateRecipes();
    };

    @Input()
    public indexPageSize: number = 0;
    @Input()
    public indexPageCount: number = 1;

    public fontSize: number = 16;

    public recipes: Recipe[] = [];

    public get startRecipeIndex(): number{
        return (this.indexPageCount + this._indexPageNumber) *this.indexPageSize;
    }

    constructor(private recipeService: RecipeService) {}

    ngOnInit() {
        this.updateRecipes();
    }

    private updateRecipes(){
        const pageNumber = this.indexPageCount + this._indexPageNumber;
        this.recipes = this.recipeService.getRecipes().slice(pageNumber*this.indexPageSize, (pageNumber+1) * this.indexPageSize);
    }

    public onPageResize($event: ResizedEvent) {
        this.fontSize = $event.newRect.width / 50;
    }
}
