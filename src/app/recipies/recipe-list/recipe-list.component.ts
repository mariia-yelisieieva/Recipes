import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipeChangedSubscription: Subscription;

  constructor(private recipeService: RecipesService,
              private router: Router,
              private activetedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipeChangedSubscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    this.recipeChangedSubscription.unsubscribe();
  }

  onNewRecipe() {
    this.router.navigate(["new"], { relativeTo: this.activetedRoute });
  }

}
