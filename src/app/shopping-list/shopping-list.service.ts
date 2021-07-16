import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientschanged = new EventEmitter<Ingredient[]>();
  private ingredients : Ingredient[]=[
    new Ingredient('Tofu',20),
    new Ingredient('Olives',10),
    new Ingredient('Beef',10)
  ];
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }
  
  onAddIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientschanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients : Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientschanged.emit(this.ingredients.slice());
  }
}
