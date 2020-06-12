import { Component } from '@angular/core';
import { MenuItem } from './header/header.menu.item.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipies';
  selectedMenuItem: MenuItem = MenuItem.Recipes;

  onMenuItemSelected(selectedMenuItem: MenuItem) {
    this.selectedMenuItem = selectedMenuItem;
  }

}
