import {Component, Input, OnInit, Output} from '@angular/core';
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe-page/recipe.model";
import {ResizedEvent} from "angular-resize-event";

export const TOC_PAGE_SIZE = 44;

@Component({
    selector: 'app-table-of-contents-page',
    templateUrl: './table-of-contents-page.component.html',
    styleUrls: ['./table-of-contents-page.component.scss']
})
export class TableOfContentsPageComponent implements OnInit{

    private _tocPageNumber: number = 0;

    @Input()
    public width: number = 50;
    @Input()
    public set tocPageNumber(i: number) {
        this._tocPageNumber = i;
        this.updateRecipes();
    };
    @Input()
    public tocPageCount: number = 1;

    public tocPageSize: number = TOC_PAGE_SIZE;
    public fontSize: number = 16;
    public recipes: Recipe[] = [];

    public get startRecipeIndex(): number{
        return (this.tocPageCount + this._tocPageNumber) *this.tocPageSize;
    }

    constructor(private recipeService: RecipeService) {}

    ngOnInit() {
        this.updateRecipes();
    }

    private updateRecipes(){
        const pageNumber = this.tocPageCount + this._tocPageNumber;
        this.recipes = this.recipeService.getRecipes().slice(pageNumber*this.tocPageSize, (pageNumber+1) * this.tocPageSize);
    }

    public onPageResize($event: ResizedEvent) {
        this.fontSize = $event.newRect.width / 50;
    }
}
