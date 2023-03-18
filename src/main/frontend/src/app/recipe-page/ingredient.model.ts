import {MeasurementUnit} from "./measurement-unit.model";

export interface Ingredient {
  name: string;
  amount?: number;
  unit?: MeasurementUnit
}

export interface IngredientSublist {
  name?: string;
  ingredients: Ingredient[];
}
