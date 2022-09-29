package org.recipebook.recipe.models

import javax.persistence.*

@Entity
@Table(name="recipe")
class Recipe (

    @Column(nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,
    var title: String,

    @ElementCollection
    var tags: MutableList<String>?,

    @ElementCollection
    var steps: MutableList<String>?,

    @OneToMany(cascade = arrayOf(CascadeType.ALL))
    var ingredients: MutableList<Ingredient>?,

    @Column()
    var servings: Int?,

    @Column()
    var prepTimeMinutes: Int?,

    @Column()
    var cookTimeMinutes: Int?,

    @Column()
    var notes: String?,

    @Column()
    var origin: String?
)

