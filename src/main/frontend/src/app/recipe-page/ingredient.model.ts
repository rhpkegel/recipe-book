export interface Ingredient {
  name: string;
  amount?: number | string;
  unit?: 'gram' | 'liter' | 'pound' | 'tablespoon' | 'teaspoon' | 'cup'
}

export interface IngredientSublist {
  name: string;
  ingredients: Ingredient[];
}
