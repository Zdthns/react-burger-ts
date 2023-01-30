import { getIngredientsApi } from "../../utils/burger.js";
import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED, ADD_INGREDIENT_DATA, DELETE_INGREDIENT_DATA, TActions } from "../../utils/types/constants.js";
import { Iingredient } from "../../utils/types/types.js";
import { AppDispatch } from "../store.js";

export const getIngredients =()=> {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    getIngredientsApi()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            ingredients: res.data,
          });
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAILED,
          });
        }
      })
      .catch(() => dispatch({ type: GET_INGREDIENTS_FAILED }));
  };
}

export const addIngredientData = (item: Iingredient )=> {
  return {
    type: ADD_INGREDIENT_DATA,
    item: item,
  };
}

export function deleteIngredienData() {
  return {
    type: DELETE_INGREDIENT_DATA,
    item: null,
  };
}
