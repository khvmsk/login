import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'

export interface Recipes {
  id: number;
  author: string;
  title: string;
  ingredients:{
    name:string;
    quantity:string;
    type:string;
  };
}

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})

export class RecipesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'author', 'title','ingredients'];
  dataSource;
  recipes: Recipes[];
  isliquid:boolean;

  public recipeData:any;
  public requests;
  constructor(private apiservice:ApiService ) {
   
   }


  ngOnInit() {
    this.apiservice.getData().subscribe(data =>{
      this.recipes = data['Recipies'];
      this.dataSource = new MatTableDataSource(this.recipes);
      console.log( this.dataSource);
       console.log( this.recipeData=data['Recipies']);
    }); 
  }
}
