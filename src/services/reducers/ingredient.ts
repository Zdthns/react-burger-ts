import { PayloadAction } from "@reduxjs/toolkit";
import { Iingredient } from "../../utils/types/types";
import {
  ADD_INGREDIENT_DATA,
  DELETE_INGREDIENT_DATA,
} from "../../utils/types/constants";
import { TActions } from "../actions/actionType";

type TinitialStateingredientDetails = {
  currentIngredient: Iingredient | null,
};

const initialState: TinitialStateingredientDetails = {
  currentIngredient: null,
};

const ingredientDetailsReducer = (state = initialState, action: PayloadAction<TActions>) => {
  switch (action.type) {
    case ADD_INGREDIENT_DATA: {
      return {
        ...state,
        currentIngredient: action.payload,
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
