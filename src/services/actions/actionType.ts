import { ADD_INGREDIENT_DATA, DELETE_INGREDIENT_DATA, OPEN_INGREDIENT_DETAILS, CLOSE_INGREDIENT_DETAILS, OPEN_ORDER_DETAILS, CLOSE_ORDER_DETAILS, ADD_INGREDIENT_TO_CONSTRUCTOR, DELETE_INGREDIENT_FROM_CONSTRUCTOR, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED } from "../../utils/types/constants"
import { Iingredient } from "../../utils/types/types"
import { constructor } from "./constructor"
import { TgetIngredients } from "./ingredients"
import { modal } from "./modals"
import { order } from "./order"
import { userRegistr } from "./user"
import { wsConectType } from "./wsConect"


export type TActions =
  modal
  | TgetIngredients
  | constructor
  | order
  | userRegistr
  | wsConectType



interface IaddIngredientData {
  readonly type: typeof ADD_INGREDIENT_DATA,
  readonly item: Iingredient,
}

interface IdeletIngredientData {
  readonly type: typeof DELETE_INGREDIENT_DATA,
  readonly item: null
}
//modal



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
