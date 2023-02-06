import { PayloadAction } from "@reduxjs/toolkit";
import { Iingredient, IingredientID } from "../../utils/types/types";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../../utils/types/constants";
import { TActions } from "../actions/actionType";


export type initialStateType = {
  ingredients: ReadonlyArray<Iingredient>,
  ingredientsRequest: boolean,
  ingredientsFailed: boolean,
};

const initialState: initialStateType = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

const ingredientsReducer = (state = initialState, action: TActions) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFailed: false,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.ingredients,
        ingredientsRequest: false,
        ingredientsFailed: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsFailed: true,
        ingredientsRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default ingredientsReducer;
