import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './header.menu.item.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuItemSelected = new EventEmitter<MenuItem>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipesSelected() {
    this.menuItemSelected.emit(MenuItem.Recipes);
  }

  onShoppingListSelected() {
    this.menuItemSelected.emit(MenuItem.ShoppingList);
  }

}
