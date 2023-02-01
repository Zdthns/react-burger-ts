import { ADD_INGREDIENT_DATA, DELETE_INGREDIENT_DATA, OPEN_INGREDIENT_DETAILS, CLOSE_INGREDIENT_DETAILS, OPEN_ORDER_DETAILS, CLOSE_ORDER_DETAILS, ADD_INGREDIENT_TO_CONSTRUCTOR, DELETE_INGREDIENT_FROM_CONSTRUCTOR, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED } from "../../utils/types/constants"
import { Iingredient } from "../../utils/types/types"


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
