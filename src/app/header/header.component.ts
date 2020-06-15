import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './header.menu.item.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
