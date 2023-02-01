import { OPEN_INGREDIENT_DETAILS, CLOSE_INGREDIENT_DETAILS,  OPEN_ORDER_DETAILS,  CLOSE_ORDER_DETAILS } from "../../utils/types/constants";
import { TActions } from "./actionType";



export const openIngredientDetailsModals =
  (): TActions => {
    return {
      type: OPEN_INGREDIENT_DETAILS,
    };
  };

export const closeIngredientDetailsModals =
  (): TActions => {
    return {
      type: CLOSE_INGREDIENT_DETAILS,
    };
  };

export const openOrderDetailsModals =
  (): TActions => {
    return {
      type: OPEN_ORDER_DETAILS,
    };
  };

export const closeOrderDetailsModals =
  (): TActions => {
    return {
      type: CLOSE_ORDER_DETAILS,
    };
  };
