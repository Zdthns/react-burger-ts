import { CLOSE_INGREDIENT_DETAILS, CLOSE_ORDER_DETAILS, OPEN_INGREDIENT_DETAILS, OPEN_ORDER_DETAILS } from "../../services/actions/modals";
import { WS_USER_CONNECTION_START, WS_USER_CONNECTION_SUCCESS, WS_USER_CONNECTION_CLOSE, WS_USER_CONNECTION_ERROR, WS_USER_GET_MESSAGE, WS_USER_SEND_MESSAGE, WS_USER_CONNECTION_CLOSED, WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_CONNECTION_ERROR, WS_CONNECTION_CLOSED, WS_GET_MESSAGE, WS_CONNECTION_CLOSE, WS_SEND_MESSAGE } from "../../services/actions/wsConect";

export interface IformFields {
  [n: string]: string
}// name: string, placeholder: string, type: string
type TStringFunc = () => string; // использовать для типизации любой функции без аргументов, которая возвращает строку
export type TsArr = number | string;

export type TIngredient = {
  _id: string;
  name: string;
  type: 'bun' | 'main' | 'sauce';
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  key?: string
  count?: number
};

export type TOrderDetails = {
  ingredients: Array<string>;
  _id: string;
  name: string;
  status: string;
  number: number;
  createdAt: string;
  updatedAt: string;
  id?: string;
  count?: TCount
};

export type TCount = {
  [elem: string]: number
}
export type TOrder = {
  success: boolean;
  orders: TOrderDetails[];
  total: number;
  totalToday: number;
};





