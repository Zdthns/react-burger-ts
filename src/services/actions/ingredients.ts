import { getIngredientsApi } from "../../utils/burger.js";
import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED, ADD_INGREDIENT_DATA, DELETE_INGREDIENT_DATA } from "../../utils/types/constants.js";
import { Iingredient, IingredientID } from "../../utils/types/types.js";
import { AppDispatch } from "../store.js";

export type TgetIngredients =
  TgetIngredientsRequest
  | TgetIngredientsSuccess
  | TgetIngredientsError
  | addIngredientDataType
  | deleteIngredienDataType


export type TgetIngredientsRequest ={
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}
export type TgetIngredientsSuccess ={
  readonly type: typeof  GET_INGREDIENTS_SUCCESS;
  readonly ingredients: IingredientID[]
}

export type TgetIngredientsError ={
  readonly type: typeof GET_INGREDIENTS_FAILED;
  readonly payload: string;
}

export type addIngredientDataType ={
  readonly type: typeof  ADD_INGREDIENT_DATA;
  readonly ingredients: Iingredient
}
export type deleteIngredienDataType ={
  readonly type: typeof  DELETE_INGREDIENT_DATA;
  readonly ingredients: null
}


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
