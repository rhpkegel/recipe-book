package org.recipebook

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class RecipeBookApplication

fun main(args: Array<String>) {
	runApplication<RecipeBookApplication>(*args)
}
