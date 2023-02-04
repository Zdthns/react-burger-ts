import { ADD_INGREDIENT_TO_CONSTRUCTOR, DELETE_INGREDIENT_FROM_CONSTRUCTOR } from "../../utils/types/constants"
import { TActions } from "./actionType"




const addIngredientToConstructor = (item: TActions) => {
  return {
    type: ADD_INGREDIENT_TO_CONSTRUCTOR,
    draggedIngredient: item,
  }
}

const deleteIngredientFromConstructor = (item: string) => {
  return {
    type: DELETE_INGREDIENT_FROM_CONSTRUCTOR,
    id: item,
  }
}