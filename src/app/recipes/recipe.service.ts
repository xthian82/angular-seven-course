import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';

export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'Simply Test',
      'https://img.taste.com.au/ITgbQUXM/w643-h428-cfill-q90/taste/2016/11/butter-chicken-with-naan-81484-1.jpeg',
      [
        new Ingredient('meat', 1),
        new Ingredient('French fries', 20)
      ]),
    new Recipe(
      'Another Test Recipe',
      'Simply Test again',
      'https://img.taste.com.au/ITgbQUXM/w643-h428-cfill-q90/taste/2016/11/butter-chicken-with-naan-81484-1.jpeg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) {
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
