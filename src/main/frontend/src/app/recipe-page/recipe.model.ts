import {Ingredient, IngredientSublist} from "./ingredient.model";

export interface Recipe {
  id: number;
  title: string;
  tags?: string[];
  steps?: string[];
  ingredients: Ingredient[] | IngredientSublist[];
  servings?: number;
  prepTimeMinutes?: number;
  cookTimeMinutes?: number;
  notes?: string;
  origin?: string;
}

export const exampleRecipe: Recipe = {
  id: 1,
  title: 'Chef John\'s Hungarian Goulash',
  ingredients: [{
    name: 'Meat mixture',
    ingredients: [
      {
        amount: 2.5,
        name: 'boneless beef chuck roast',
        unit: 'pound'
      },
      {
        name: 'Salt and Black Pepper, to taste',
      },
      {
        amount: 2,
        name: 'vegetable oil',
        unit: 'tablespoon'
      },
      {
        amount: 2,
        name: 'Onions, chopped',
      },
      {
        amount: 2,
        name: 'olive oil',
        unit: 'teaspoon'
      },
      {
        amount: 0.5,
        name: 'salt',
        unit: 'teaspoon'
      },
      {
        amount: 2,
        name: 'Caraway seeds, crushed',
        unit: 'teaspoon'
      },
      {
        amount: 1,
        name: 'freshly ground black pepper',
        unit: 'teaspoon'
      },
      {
        amount: 1,
        name: 'dried marjoram',
        unit: 'teaspoon'
      },
      {
        amount: 0.5,
        name: 'ground thyme',
        unit: 'teaspoon'
      },
      {
        amount: 0.5,
        name: 'cayenne pepper',
        unit: 'teaspoon'
      }
    ]
  }, {
    name: 'Broth mixture',
    ingredients: [
      {
        amount: 4,
        unit: 'cup',
        name: 'chicken broth, divided'
      },
      {
        amount: 0.25,
        unit: 'cup',
        name: 'tomato paste'
      },
      {
        amount: 3,
        name: 'cloves garlic, crushed'
      },
      {
        amount: 2,
        unit: 'tablespoon',
        name: 'balsamic vinegar'
      }, {
        amount: 1,
        unit: 'teaspoon',
        name: 'white sugar'
      },
      {
        amount: 0.5,
        unit: 'teaspoon',
        name: 'salt, or to taste'
      },
      {
        amount: 1,
        name: 'bay leaf'
      }
    ]
  }],
  prepTimeMinutes: 30,
  cookTimeMinutes: 120,
  servings: 6,
  tags: ['Main dish', 'beef', 'pasta', 'slow cooking'],
  steps: [
    'Season beef with salt and black pepper. Heat vegetable oil in large skillet over high heat; cook and stir beef in hot oil in batches until browned on all sides, about 5 minutes per batch. Transfer toi a large stockpot and reserve drippings in the skillet.',
    'Return skillet to medium heat; stir onions into the reservedc drippings, drizzle olive oil over onions, seaosn with 1/2 teaspoon salt and cook until onion has softened, about 5 minutes. Transfer to the stockpot with beef.',
    'Combine paprika, caraway seeds, black pepper, marjoram, thyme, and cayenne pepper in the skillet and toast over medium heat until fragrant, about 3 minutes. Add 1 cup chicken broth and stir; transfer to the beef and onion mixture.',
    'Stir 3 cups chicken broth into beef mixture. Add tomato paste, garlic, vinegar, sugar, 1/2 teaspoon salt, and bay leaf; place stockpot over high heat and bring to a boil. Reduce heat to low and simmer until a fork insertss easily into the meat, 1.5 to 2 hours.'
  ],
  notes: 'Real goulash is more like a soup, so if you want yours thinner, just add 2 or 3 extra cups of broth',
  origin: 'Chef john, Allrecipes',
}
