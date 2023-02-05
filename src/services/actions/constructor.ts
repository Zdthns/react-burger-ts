import { ADD_INGREDIENT_TO_CONSTRUCTOR, DELETE_INGREDIENT_FROM_CONSTRUCTOR } from "../../utils/types/constants"
import { Iingredient, TOrderNumber } from "../../utils/types/types"

export type constructor =
  IaddIngredientToConstructor
  | IdeletIngredientFromConstructor


export interface IaddIngredientToConstructor {
  readonly type: typeof ADD_INGREDIENT_TO_CONSTRUCTOR
  readonly draggedIngredient: Iingredient,
};

//export type TdraggedIngredient = {
//  item: Iingredient,
//  key: string

//}
export interface IdeletIngredientFromConstructor {
  readonly type: typeof DELETE_INGREDIENT_FROM_CONSTRUCTOR,
  readonly id: number
};


export const addIngredientToConstructor = (item: Iingredient
): IaddIngredientToConstructor => {
  return {
    type: ADD_INGREDIENT_TO_CONSTRUCTOR,
    draggedIngredient: item,
  }
}
export const deleteIngredientFromConstructor = (id: number): IdeletIngredientFromConstructor => {
  return {
    type: DELETE_INGREDIENT_FROM_CONSTRUCTOR,
    id: id,
  }
}