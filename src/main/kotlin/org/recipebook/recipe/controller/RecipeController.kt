package org.recipebook.recipe.controller

import org.recipebook.recipe.RecipeService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*


@RestController()
@RequestMapping(path = arrayOf("/recipes"))
class RecipeController {

    private final val recipeService: RecipeService;


    constructor(recipeService: RecipeService){
        this.recipeService=recipeService;
    }

    @GetMapping()
    fun listRecipes(): List<RecipeDto> {
        return this.recipeService.getRecipes().map { it.toRecipeDto() }
    }

    @PostMapping()
    fun addRecipe(@RequestBody recipeDto: RecipeDto): ResponseEntity<Void>{
        this.recipeService.addRecipe(recipeDto.toRecipe())
        return ResponseEntity<Void>(HttpStatus.CREATED)
    }
}