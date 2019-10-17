import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
ingredient:Ingredient[]=[
  new Ingredient(
    'Apple',
     25
  ),
  new Ingredient(
    'Orange',
    20
  ),
  new Ingredient(
    'Banana',
    5
  )
]
  constructor() { }

  ngOnInit() {
  }

}
