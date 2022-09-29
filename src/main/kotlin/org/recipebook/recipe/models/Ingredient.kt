package org.recipebook.recipe.models

import javax.persistence.*

@Entity
class Ingredient (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long,
    var name: String,
    var amount: Int,
    var unit: MeasurementUnit,
    @ManyToOne
    @JoinColumn(name="recipe_id")
    var recipe: Recipe? = null
)
