import { EventEmitter, Injectable, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
@Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  private recipes: Recipe[] =[
    new Recipe('test1','Simple recipe1','https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21-768x1152.jpg'),
    new Recipe('test2','Simple recipe2','https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21-768x1152.jpg')

  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
