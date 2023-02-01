import { TICons } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";



export type TFields ={
  name: string,
  placeholder: string,
  type: string | undefined,
  icon?: TICons | undefined,
}

export interface IUser{
  [name: string]: string;
}
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
export type TOrderData = {
  name: string;
  order: { number: number };
  success: boolean;
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

export type TUser = {
  name: string;
  email: string;
};



