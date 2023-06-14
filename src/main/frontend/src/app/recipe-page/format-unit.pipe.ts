import { Pipe, PipeTransform } from '@angular/core';
import {Ingredient} from "./ingredient.model";
import {unitShortNames} from "./measurement-unit.model";

@Pipe({
  name: 'formatUnit'
})
export class FormatUnitPipe implements PipeTransform {

  transform(value: Ingredient): string {
    return value.unit ? unitShortNames[value.unit] : '';
  }
}
