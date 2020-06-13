import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/IngredientModel';
import { ShoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(name: string, amount: number) {
      this.shoppingListService.addIngredient(new Ingredient(name, amount));
  }

}
