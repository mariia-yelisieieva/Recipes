import { Component, OnInit } from '@angular/core'
import { Ingredient } from '../shared/IngredientModel';
import { ShoppingListService } from './shoppingList.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shoppingList.component.html',
    styleUrls: ['./shoppingList.component.css']
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[];

    constructor(private shoppingListService: ShoppingListService) {
    }

    ngOnInit(): void {
        this.ingredients = this.shoppingListService.getIngredients();
        this.shoppingListService.ingredientChanged.subscribe((ingredientArray) => { this.ingredients = ingredientArray; })
    }

}
