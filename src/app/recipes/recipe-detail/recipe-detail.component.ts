import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass']
})
export class RecipeDetailComponent implements OnInit {
@Input() recipe: Recipe;
  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {

  }
  addToList(){
this.recipeService.addIngredientsToshoppingList(this.recipe.ingredients);
  }

}
