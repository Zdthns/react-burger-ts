import { TIngredient } from "../../utils/types/types";
import {
  ADD_INGREDIENT_DATA,
  DELETE_INGREDIENT_DATA,
} from "../actions/ingredients";

type TinitialStateingredientDetails = {
  currentIngredient: TIngredient | {},
};

const initialState: TinitialStateingredientDetails = {
  currentIngredient: {},
};

const ingredientDetailsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_INGREDIENT_DATA: {
      return {
        ...state,
        currentIngredient: action.item,
      };
    }
    case DELETE_INGREDIENT_DATA: {
      return {
        ...state,
        currentIngredient: {},
      };
    }
    default: {
      return state;
    }
  }
};

export default ingredientDetailsReducer;
