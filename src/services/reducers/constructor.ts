import {
  ADD_INGREDIENT_TO_CONSTRUCTOR,
  DELETE_INGREDIENT_FROM_CONSTRUCTOR,
  TActions,
} from "../../utils/types/constants";

import { Iingredient } from "../../utils/types/types";


type TinitialStateConstructor = {
  constructorIngredients:  ReadonlyArray<Iingredient>,
}

const initialState: TinitialStateConstructor = {
  constructorIngredients:[],
};

function constructorReducer(state = initialState, action:TActions ) {
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
