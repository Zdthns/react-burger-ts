import { PayloadAction } from "@reduxjs/toolkit";
import { TActions } from "../../utils/types/constants";
import { Iingredient } from "../../utils/types/types";
import {
  ADD_INGREDIENT_DATA,
  DELETE_INGREDIENT_DATA,
} from "../../utils/types/constants";

type TinitialStateingredientDetails = {
  currentIngredient: Iingredient | null,
};

const initialState: TinitialStateingredientDetails = {
  currentIngredient: null,
};

const ingredientDetailsReducer = (state = initialState, action: TActions) => {
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
        currentIngredient: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default ingredientDetailsReducer;
