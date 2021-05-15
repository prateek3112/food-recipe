import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients : Ingredient[]=[
    new Ingredient('paneer',20),
    new Ingredient('onion',10)
  ];
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }
}
