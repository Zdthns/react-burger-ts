import { PayloadAction } from "@reduxjs/toolkit";
import {
  ADD_INGREDIENT_TO_CONSTRUCTOR,
  DELETE_INGREDIENT_FROM_CONSTRUCTOR,
} from "../../utils/types/constants";

import { Iingredient } from "../../utils/types/types";
import { TActions } from "../actions/actionType";


type TinitialStateConstructor = {
  constructorIngredients: Iingredient[],
}

const initialState: TinitialStateConstructor = {
  constructorIngredients: [],
};

function constructorReducer(state = initialState, action: TActions) {
  switch (action.type) {
    case ADD_INGREDIENT_TO_CONSTRUCTOR: {
      return {
        ...state,
        constructorIngredients: [
          ...state.constructorIngredients,
          action.payload,
        ],
      };
    }
    case DELETE_INGREDIENT_FROM_CONSTRUCTOR: {
      let itemToDeleteIndex: number = state.constructorIngredients
        .map((item) => item.key)
        .indexOf(action.payload);
      return {
        ...state,
        constructorIngredients: [...state.constructorIngredients].filter(
          (item, index) => index !== itemToDeleteIndex
        ),
      };
    }
    default: {
      return state;
    }
  }
}

export default constructorReducer;
