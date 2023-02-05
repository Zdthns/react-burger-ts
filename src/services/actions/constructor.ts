import { ADD_INGREDIENT_TO_CONSTRUCTOR, DELETE_INGREDIENT_FROM_CONSTRUCTOR } from "../../utils/types/constants"
import { Iingredient } from "../../utils/types/types"



export interface addIngredientToConstructor {
  readonly type: typeof ADD_INGREDIENT_TO_CONSTRUCTOR,
  readonly draggedIngredient: Iingredient,
  readonly key: string
}

export interface deleteIngredientToConstructor {
  readonly type: typeof DELETE_INGREDIENT_FROM_CONSTRUCTOR,
  readonly payload: string
}

export const addIngredientToConstructor = (draggedIngredient: addIngredientToConstructor) => {
  return {
    type: ADD_INGREDIENT_TO_CONSTRUCTOR,
    draggedIngredient: draggedIngredient,
    key: draggedIngredient.key
  }
}

export const deleteIngredientFromConstructor = (item: deleteIngredientToConstructor) => {
  return {
    type: DELETE_INGREDIENT_FROM_CONSTRUCTOR,
    id: item,
  }
}