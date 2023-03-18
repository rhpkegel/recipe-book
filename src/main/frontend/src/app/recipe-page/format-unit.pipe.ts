import { Pipe, PipeTransform } from '@angular/core';
import {Ingredient} from "./ingredient.model";
import {unitShortNames} from "./measurement-unit.model";

@Pipe({
  name: 'formatUnit'
})
export class FormatUnitPipe implements PipeTransform {

  transform(value: Ingredient): string {
    let unitName = value.unit ? unitShortNames[value.unit] : '';
    if (value.unit && value.amount && value.amount > 1) unitName += 's';
    return unitName;
  }

}
