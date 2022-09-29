package org.recipebook.recipe

import org.recipebook.recipe.models.Recipe
import org.springframework.data.repository.CrudRepository

interface RecipeRepository : CrudRepository<Recipe, Long> {
}