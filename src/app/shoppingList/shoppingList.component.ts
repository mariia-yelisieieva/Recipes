import { Component } from '@angular/core'
import { Ingredient } from '../shared/IngredientModel';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shoppingList.component.html',
    styleUrls: ['./shoppingList.component.css']
})
export class ShoppingListComponent {
    ingredients: Ingredient[] = [
        new Ingredient("apples", 5),
        new Ingredient("tomatos", 10)
    ];

    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
}