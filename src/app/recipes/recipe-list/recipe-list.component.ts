import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[]=[
    new Recipe(
    'receipe-name',
    'receipe-description',
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/8/4/2/IG0509_panzanella_s4x3.jpg.rend.hgtvcom.826.620.suffix/1529943365287.jpeg'
    ),
    new Recipe(
      'receipe-name',
      'receipe-description',
      'data:image/jpeg;base64,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'
      )
  ]
  constructor() { 
    console.log(this.recipes)
  }

  ngOnInit() {
  }

}
