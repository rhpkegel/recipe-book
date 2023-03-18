export type MeasurementUnit = 'gram' | 'liter' | 'pound' | 'tablespoon' | 'teaspoon' | 'cup'

export const unitShortNames: Record<MeasurementUnit, string> =
  {
    gram: 'g',
    liter: 'l',
    pound: 'lb',
    tablespoon: 'tbsp',
    teaspoon: 'tsp',
    cup: 'cup'
  }

