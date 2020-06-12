import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("test recipe1", "some description", 
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"),
      new Recipe("test recipe2", "some description", 
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg")
  ]
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(selectedRecipe: Recipe) {
    this.recipeSelected.emit(selectedRecipe);
  }

}
