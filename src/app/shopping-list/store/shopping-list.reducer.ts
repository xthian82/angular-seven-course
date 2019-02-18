import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

export const GET_INGREDIENT = 'GET_INGREDIENT';
export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const DEL_INGREDIENT = 'DEL_INGREDIENT';

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch (action.type) {

    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };

    default:
      return state;
  }

  return state;
}
