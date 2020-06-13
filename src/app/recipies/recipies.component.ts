import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipesService]
})
export class RecipiesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => { this.selectedRecipe = recipe; });
  }

}
