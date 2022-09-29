package org.recipebook.recipe

import org.recipebook.recipe.models.Recipe
import org.springframework.stereotype.Service

@Service
class RecipeService(private val recipeRepository: RecipeRepository) {

    fun getRecipes(): List<Recipe>{
        return recipeRepository.findAll().toList();
    }

    fun addRecipe(recipe: Recipe){
        this.recipeRepository.save(recipe)
    }
}