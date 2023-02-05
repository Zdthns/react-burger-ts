import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED } from "../../utils/types/constants"
import { Iingredient } from "../../utils/types/types"
import { TActions } from "./actionType"

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

const getIngredientsRequest = (): IgetIngredientsRequest => {
  return {
    type: typeof GET_INGREDIENTS_REQUEST
  }
}
const getIngredientsSuccess = (ingredients): IgetIngredientsSuccess => {
  return {
    type: GET_INGREDIENTS_SUCCESS
  ingredients: ingredients.ingredients,
  }
}
const getIngredientsFailed = (): IgetIngredientsFailed => {
  return {
    type: typeof GET_INGREDIENTS_FAILED
  }
}

