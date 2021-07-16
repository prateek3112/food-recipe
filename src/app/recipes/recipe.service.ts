import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
@Output() recipeSelected = new EventEmitter<Recipe>();
  constructor(private slistService : ShoppingListService) { }

  private recipes: Recipe[] =[
    new Recipe('Paneer Tomato Chilli Pizza','Hot and Spicy','../../assets/p1.jpg'
    ,[new Ingredient('paneer',20),
    new Ingredient('Tomato',10)]),
    new Recipe('Peri Peri Chicken Pizza','Your Favourite Chicken with Twist of Peri Peri','../../assets/p2.jpg',
    [new Ingredient('Chicken',20),
    new Ingredient('Onion',10)])

  ];

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToshoppingList(ingredients : Ingredient[]){
console.log(ingredients);
this.slistService.addIngredients(ingredients);
  }
}
