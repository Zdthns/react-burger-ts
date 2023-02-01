import { getCookie } from "./cookie";
import { TOrderNumber } from "./types/types";
import { api, checkResponse } from "./userApi";

export const getIngredientsApi = () =>
  fetch(`${api}/ingredients`).then(checkResponse);

export const getOrderNumber = (data: TOrderNumber) =>
  fetch(`${api}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${getCookie("token")}`,
    },

    body: JSON.stringify({
      ingredients: data,
    }),
  })
    .then(checkResponse)
    .then((data) => {
      if (data?.success) return data.order;
      return Promise.reject(data);
    });
