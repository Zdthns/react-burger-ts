import { type } from "os";
import { Iingredient } from "./types";
export const OPEN_INGREDIENT_DETAILS = "OPEN_INGREDIENT_DETAILS";
export const CLOSE_INGREDIENT_DETAILS = "CLOSE_INGREDIENT_DETAILS";
export const OPEN_ORDER_DETAILS = "OPEN_ORDER_DETAILS";
export const CLOSE_ORDER_DETAILS = "CLOSE_ORDER_DETAILS";

export const ADD_INGREDIENT_TO_CONSTRUCTOR = "ADD_INGREDIENT_TO_CONSTRUCTOR";
export const DELETE_INGREDIENT_FROM_CONSTRUCTOR = "REMOVE_INGREDIENT";
export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";
export const FORGOT_CODE_REQUEST = "FORGOT_CODE_REQUEST";
export const FORGOT_CODE_ERROR = "FORGOT_CODE_ERROR";
export const FORGOT_CODE_SUCCESS = "FORGOT_CODE_SUCCESS";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_CODE_SUCCESS";
export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const REGISTER_USER_REQUEST = "LOGIN_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const REGISTER_USER_ERROR = "LOGIN_USER_ERROR";
export const TOGGLE_IS_PRELOADER = "TOGGLE_IS_PRELOADER";
export const LOGOUT_USER_REQUEST = "LOGOUT_USER_REQUEST";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const LOGOUT_USER_ERROR = "LOGOUT_USER_ERROR";
export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";
export const UPDATE_TOKEN_REQUEST = "UPDATE_TOKEN_REQUEST";
export const UPDATE_TOKEN_SUCCESS = "UPDATE_TOKEN_SUCCESS";
export const UPDATE_TOKEN_ERROR = "UPDATE_TOKEN_ERROR";


export const ADD_INGREDIENT_DATA = "ADD_INGREDIENT_DATA";
export const DELETE_INGREDIENT_DATA = "DELETE_INGREDIENT_DATA";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export type TActions =
  | IopenIngredientDetailsModalsType
  | IcloseIngredientDetailsModalsType
  | IopenOrderDetailsModalsType
  | IcloseOrderDetailsModalsType
  | IaddIngredientToConstructor
  | IdeletIngredientFromConstructor
  | IaddIngredientToConstructor
  | IdeletIngredientFromConstructor
  | IaddIngredientData
  | IdeletIngredientData
  | IgetIngredientsRequest
  | IgetIngredientsSuccess
  | IgetIngredientsFailed



interface IaddIngredientData{
  readonly type: typeof ADD_INGREDIENT_DATA,
  readonly item: Iingredient,
}

interface IdeletIngredientData{
  readonly type: typeof DELETE_INGREDIENT_DATA,
  readonly item: null
}

 interface IopenIngredientDetailsModalsType {
  readonly type: typeof OPEN_INGREDIENT_DETAILS
};
 interface IcloseIngredientDetailsModalsType {
  readonly type: typeof CLOSE_INGREDIENT_DETAILS,
};
 interface IopenOrderDetailsModalsType {
  readonly type: typeof OPEN_ORDER_DETAILS,
};
 interface IcloseOrderDetailsModalsType  {
  readonly  type: typeof CLOSE_ORDER_DETAILS
}

 interface IaddIngredientToConstructor{
  readonly type: typeof ADD_INGREDIENT_TO_CONSTRUCTOR
  readonly payload:Iingredient[]
};
 interface IdeletIngredientFromConstructor {
  readonly type: typeof DELETE_INGREDIENT_FROM_CONSTRUCTOR,
  readonly payload: string
};

interface IgetIngredientsRequest {
  readonly  type: typeof GET_INGREDIENTS_REQUEST
}
interface IgetIngredientsSuccess {
  readonly  type: typeof GET_INGREDIENTS_SUCCESS
  ingredients: Iingredient[]
}
interface IgetIngredientsFailed {
  readonly  type: typeof GET_INGREDIENTS_FAILED
}



