export type MeasurementUnit = 'gram' | 'milliliter' | 'liter' | 'pound' | 'tablespoon' | 'teaspoon' | 'cup' | 'stuk'

export const unitShortNames: Record<MeasurementUnit, string> =
  {
    gram: 'gr',
    milliliter: 'ml',
    liter: 'l',
    stuk: 'stuk',
    pound: 'lb',
    tablespoon: 'tbsp',
    teaspoon: 'tsp',
    cup: 'cup'
  }

