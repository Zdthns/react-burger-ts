import { getCookie, setCookie } from "./cookie";
import { TForm, TUser } from "./types/types";
export const api = "https://norma.nomoreparties.space/api";

export const wsUrl: string = "wss://norma.nomoreparties.space/orders/all";
export const wsUserUrl: string = "wss://norma.nomoreparties.space/orders";

export const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};
// регистрация
export const getRegistrationUser = (data: TUser) =>
  fetch(`${api}/auth/register`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      name: data.name,
    }),
    redirect: "follow",
    referrerPolicy: "no-referrer",
  }).then(checkResponse);

//логин
export const getUserLogin = (data: TUser) =>
  fetch(`${api}/auth/login`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
    redirect: "follow",
    referrerPolicy: "no-referrer",
  }).then(checkResponse);

// выход
export const getUserLogout = () =>
  fetch(`${api}/auth/logout`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: localStorage.getItem("jwt") }),
    redirect: "follow",
    referrerPolicy: "no-referrer",
  }).then(checkResponse);

// сброс пароля
export const getPasswordReset = (email: string): Response => {
  fetch(`${api}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  }).then(checkResponse);
};
//в разработке

export function setNewPassword(password: TForm, token: string) {
  return fetch(`${api}/password-reset/reset`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password: password, token: token }),
  }).then(checkResponse);
}

//получение  данных пользователя
export const getUser = () =>
  fetch(`${api}/auth/user`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${getCookie("token")}`,
    },
  }).then(checkResponse);
// обновление данных пользователя

export const updateUser = (data: string[]) =>
  fetch(`${api}/auth/user`, {
    method: "PATCH",

    headers: {
      "Content-Type": "application/json",
      Authorization: `${getCookie("token")}`,
    },
    body: JSON.stringify(data),
  }).then(checkResponse);

// обновить токен
export const updateToken = () =>
  fetch(`${api}/auth/token`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",

    headers: {
      "Content-Type": "application/json",
      Authorization: `${getCookie("token")}`,
    },
    body: JSON.stringify({
      token: localStorage.getItem("jwt"),
    }),
    redirect: "follow",
    referrerPolicy: "no-referrer",
  }).then(checkResponse);
