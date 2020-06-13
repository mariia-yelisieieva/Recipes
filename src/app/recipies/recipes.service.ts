import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/IngredientModel';
import { ShoppingListService } from '../shoppingList/shoppingList.service';

@Injectable()
export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Schnitzel", "some description", 
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg", 
      [
        new Ingredient("Meat", 1),
        new Ingredient("Fries", 10),
      ]),
    new Recipe("Burger", "some description", 
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
      [
        new Ingredient("Buns", 2),
        new Ingredient("Meat", 1),
      ])
  ]

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
      return this.recipes.slice();
  }

  addRecipe(recipe: Recipe) {

  }
  
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
  
}