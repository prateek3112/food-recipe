import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] =[];

  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor( private recipeService : RecipeService) { }

  ngOnInit(): void {
this.recipes = this.recipeService.getRecipes();

    
  }
 

}