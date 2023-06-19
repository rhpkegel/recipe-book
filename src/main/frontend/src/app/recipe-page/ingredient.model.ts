import {MeasurementUnit} from "./measurement-unit.model";

export interface Ingredient {
  name: string;
  amount?: number | null;
  unit?: MeasurementUnit | null
}

export interface IngredientSublist {
  name?: string;
  ingredients: Ingredient[];
}
