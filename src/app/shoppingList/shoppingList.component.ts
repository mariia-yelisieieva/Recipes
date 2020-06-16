import { Component, OnInit, OnDestroy } from '@angular/core'
import { Ingredient } from '../shared/IngredientModel';
import { ShoppingListService } from './shoppingList.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shoppingList.component.html',
    styleUrls: ['./shoppingList.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChanged: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
      this.ingredients = this.shoppingListService.getIngredients();
      this.igChanged = this.shoppingListService.ingredientChanged.subscribe((ingredientArray) => { this.ingredients = ingredientArray; })
  }

  ngOnDestroy(): void {
    this.igChanged.unsubscribe();
  }

}
