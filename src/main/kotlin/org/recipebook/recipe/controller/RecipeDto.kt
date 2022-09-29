package org.recipebook.recipe.controller

import org.recipebook.recipe.models.Recipe

data class RecipeDto(
    val id: Long?,
    val title: String,
    val tags: MutableList<String>?,

    val steps: MutableList<String>?,
    val ingredients: MutableList<IngredientDto>?,

    val servings: Int?,
    val prepTimeMinutes: Int?,
    val cookTimeMinutes: Int?,
    val notes: String?,
    val origin: String?,
)

fun RecipeDto.toRecipe(): Recipe {
    return Recipe(
        id = id,
        title = title,
        tags = tags,
        steps = steps,
        ingredients = ingredients?.map{ it.toIngredient() }?.toMutableList(),
        servings = servings,
        prepTimeMinutes = prepTimeMinutes,
        cookTimeMinutes = cookTimeMinutes,
        notes = notes,
        origin = origin
    )
}

fun Recipe.toRecipeDto(): RecipeDto {
    return RecipeDto(
        id = id,
        title = title,
        tags = tags,
        steps = steps,
        ingredients = ingredients?.map { it.toIngredientDto() }?.toMutableList(),
        servings = servings,
        prepTimeMinutes = prepTimeMinutes,
        cookTimeMinutes = cookTimeMinutes,
        notes = notes,
        origin = origin
    )
}