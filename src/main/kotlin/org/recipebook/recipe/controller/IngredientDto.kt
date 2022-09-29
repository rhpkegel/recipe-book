package org.recipebook.recipe.controller

import org.recipebook.recipe.models.Ingredient
import org.recipebook.recipe.models.MeasurementUnit

data class IngredientDto(
    val id: Long,
    val name: String,
    val amount: Int,
    val unit: MeasurementUnit
)

fun Ingredient.toIngredientDto(): IngredientDto {
    return IngredientDto(
        id = id,
        name = name,
        amount = amount,
        unit = unit
    )
}

fun IngredientDto.toIngredient(): Ingredient {
    return Ingredient(
        id = id,
        name = name,
        amount = amount,
        unit = unit
    )
}