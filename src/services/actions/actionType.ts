import { ADD_INGREDIENT_DATA, DELETE_INGREDIENT_DATA, OPEN_INGREDIENT_DETAILS, CLOSE_INGREDIENT_DETAILS, OPEN_ORDER_DETAILS, CLOSE_ORDER_DETAILS, ADD_INGREDIENT_TO_CONSTRUCTOR, DELETE_INGREDIENT_FROM_CONSTRUCTOR, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED } from "../../utils/types/constants"
import { Iingredient } from "../../utils/types/types"
import { TgetIngredients } from "./ingredients"
import { wsConectType } from "./wsConect"


export type TActions =
  IopenIngredientDetailsModalsType
  | IcloseIngredientDetailsModalsType
  | IopenOrderDetailsModalsType
  | IcloseOrderDetailsModalsType
  | IdeletIngredientFromConstructor
  | IaddIngredientToConstructor
  | IaddIngredientData
  | IdeletIngredientData
  | IgetIngredientsRequest
  | IgetIngredientsSuccess
  | IgetIngredientsFailed
  | wsConectType
  | TgetIngredients
  | addIngredientToConstructor
  | deleteIngredientToConstructor



interface IaddIngredientData {
  readonly type: typeof ADD_INGREDIENT_DATA,
  readonly item: Iingredient,
}

interface IdeletIngredientData {
  readonly type: typeof DELETE_INGREDIENT_DATA,
  readonly item: null
}
//modal


interface IaddIngredientToConstructor {
  readonly type: typeof ADD_INGREDIENT_TO_CONSTRUCTOR
  readonly payload: TdraggedIngredient,
};

type TdraggedIngredient = {
  item: Iingredient[],
  key: string
}
interface IdeletIngredientFromConstructor {
  readonly type: typeof DELETE_INGREDIENT_FROM_CONSTRUCTOR,
  readonly payload: string
};

interface IgetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST
}
interface IgetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS
  ingredients: Iingredient[]
}
interface IgetIngredientsFailed {
  readonly type: typeof GET_INGREDIENTS_FAILED
}
