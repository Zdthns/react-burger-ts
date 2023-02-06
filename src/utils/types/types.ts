import { TICons } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { checkResponse } from "../userApi";

export type TFields = {
  name: string,
  placeholder: string,
  type: "text" | "password" | "email" | undefined,
  icon?: keyof TICons | undefined,
}
export type TForm = {
  [name: string]: string;
}
//export interface IUser {
//  [name: string]: string;
//}
export type TUser = {
  name?: string;
  login?: string;
  email?: string;
  password?: string
  token?: string | undefined;
};
export type ownerType = {
  name: string
  email: string
  createdAt: string
  updatedAt: string
}
export type IingredientID = Iingredient & { id: string }


//детали ингредиента
export interface Iingredient {
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
export type Imessage =
  TOrderNumber
  | IOrderMessage

export interface TOrderNumber {
  number: number;
};
export interface IOrderMessage {
  orders: Array<TOrderDetails>,
  total: number,
  totalToday: number,
}

export interface IuserMessages {
  orders: Array<TOrderDetails>,
  total: number,
  totalToday: number,
}

export type TOrderDetails = {
  ingredients: Array<Iingredient>;
  _id?: string;
  owner?: ownerType;
  name: string;
  status?: string;
  number?: number;
  createdAt?: string;
  updatedAt?: string;
  id?: string;
  price?: TCount
};

export type TCount = {
  [elem: string]: number
}
//данные с сервера
export type TOrder = {
  success: boolean;
  orders: TOrderDetails[];
  total: number;
  totalToday: number;
};

// стандартный ответ от сервера
export type defaulResponseType = {
  success: boolean;
  message: string;
};

// обновление токена
export type refreshTokenResponseType = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
};
// универсальные шапка и тело запроса
type universalType = {
  method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
  headers: {
    'Content-Type': string;
    Authorization?: string;
  };
  body?: string;
};
//универсальный запрос

export const universalRequestType = (url: string, options?: universalType) => {
  return fetch(url, options).then(checkResponse)
}