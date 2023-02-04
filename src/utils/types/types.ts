import { TICons } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

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
  email: string;
  password?: string
  token?: string | undefined;
};

export interface IingredientID {
  _id: string;
}
export type TOrderNumber = {
  [name: string]: string;
};
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


export type TOrderDetails = {
  ingredients: Array<string>;
  _id?: string;
  name: string;
  status?: string;
  number?: string;
  createdAt?: string;
  updatedAt?: string;
  id?: string;
  count?: TCount
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




