
import { setCookie } from "../../utils/cookie.js";
import { FORGOT_CODE_REQUEST, FORGOT_CODE_SUCCESS, FORGOT_CODE_ERROR, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR, UPDATE_TOKEN_REQUEST, UPDATE_TOKEN_SUCCESS, UPDATE_TOKEN_ERROR, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_ERROR, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_ERROR, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_ERROR, FORGOT_PASSWORD_SUCCESS } from "../../utils/types/constants.js";
import { AppDispatch, AppThunk } from "../store";
import {
  getPasswordReset,
  getRegistrationUser,
  getUserLogin,
  getUserLogout,
  getUser,
  updateUser,
  updateToken,
  setNewPassword,
} from "../../utils/userApi.js";
import { TUser, TForm } from "../../utils/types/types.js";
import { PayloadAction } from "@reduxjs/toolkit";

export type userRegistr =
  IForgotCodeRequest
  | IForgotCodeSuccess
  | IForgotCodeError
  | IResetPasswordRequest
  | IResetPasswordSuccess
  | IResetPasswordFailed
  | IsRegisterUserRequest
  | IRegisterUserSuccess
  | IRegisterUserError
  | IGetUserRequest
  | IGetUserSuccess
  | IGetUserError
  | IUpdateUserRequest
  | IUpdateTokenRequest
  | IUpdateTokenSuccess
  | IUpdateTokenError
  | ILoginUserRequest
  | ILoginUserSuccess
  | ILoginUserError
  | ILogoutRequest
  | ILogoutSuccess
  | ILogoutError
  | IUpdateUserError


interface IForgotCodeRequest {
  readonly type: typeof FORGOT_CODE_REQUEST;
}
// запрос выполнился успешно
interface IForgotCodeSuccess {
  readonly type: typeof FORGOT_CODE_SUCCESS;
  readonly user: TUser
}
// запрос выполнился с ошибкой
interface IForgotCodeError {
  readonly type: typeof FORGOT_CODE_ERROR;
}
// запрос вып
export interface IResetPasswordRequest {
  readonly type: typeof FORGOT_PASSWORD_REQUEST;
}
export interface IResetPasswordSuccess {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
}
export interface IResetPasswordFailed {
  readonly type: typeof FORGOT_PASSWORD_ERROR;
}
// Регистрация
interface IsRegisterUserRequest {
  readonly type: typeof REGISTER_USER_REQUEST
}
interface IRegisterUserSuccess {
  readonly type: typeof REGISTER_USER_SUCCESS;
  readonly user: TUser;
}
interface IRegisterUserError {
  readonly type: typeof REGISTER_USER_ERROR
}
// запрос данных о пользователе
interface IGetUserRequest {
  readonly type: typeof GET_USER_REQUEST;
}
interface IGetUserSuccess {
  readonly type: typeof GET_USER_SUCCESS;
  readonly user: TUser;
}

interface IGetUserError {
  readonly type: typeof GET_USER_ERROR;
}
// изменение данных о пользователя
interface IUpdateUserRequest {
  readonly type: typeof UPDATE_USER_REQUEST;
}
export interface IUpdateUserSuccess {
  readonly type: typeof UPDATE_USER_SUCCESS;
  readonly user: TUser;
}
export interface IUpdateUserError {
  readonly type: typeof UPDATE_USER_ERROR;
}
// токен
interface IUpdateTokenRequest {
  readonly type: typeof UPDATE_TOKEN_REQUEST;
}
interface IUpdateTokenSuccess {
  readonly type: typeof UPDATE_TOKEN_SUCCESS;
  readonly user: string;
}
interface IUpdateTokenError {
  readonly type: typeof UPDATE_TOKEN_ERROR;
}

interface ILoginUserRequest {
  readonly type: typeof LOGIN_USER_REQUEST;
}
interface ILoginUserSuccess {
  readonly type: typeof LOGIN_USER_SUCCESS;
  readonly user: TUser;
}
interface ILoginUserError {
  readonly type: typeof LOGIN_USER_ERROR;
}
// выход
interface ILogoutRequest {
  readonly type: typeof LOGOUT_USER_REQUEST;
}
interface ILogoutSuccess {
  readonly type: typeof LOGOUT_USER_SUCCESS;
}
interface ILogoutError {
  readonly type: typeof LOGOUT_USER_ERROR;
}
export const forgotCodeRequest = (): IForgotCodeRequest => ({ type: FORGOT_CODE_REQUEST })
// запрос выполнился успешно
const forgotCodeSuccess = (user: TUser): IForgotCodeSuccess => ({
  type: FORGOT_CODE_SUCCESS,
  user: user
})
// запрос выполнился с ошибкой
const forgotCodeError = (): IForgotCodeError => ({ type: FORGOT_CODE_ERROR })
// запрос вып
export const resetPasswordRequest = (): IResetPasswordRequest => ({ type: FORGOT_PASSWORD_REQUEST })
export const resetPasswordSuccess = (): IResetPasswordSuccess => ({ type: FORGOT_PASSWORD_SUCCESS })
export const resetPasswordFailed = (): IResetPasswordFailed => ({ type: FORGOT_PASSWORD_ERROR })
// Регистрация
const isRegisterUserRequest = (): IsRegisterUserRequest => ({ type: REGISTER_USER_REQUEST })
const registerUserSuccess = (user: TUser): IRegisterUserSuccess => ({
  type: REGISTER_USER_SUCCESS,
  user: user
})
const registerUserError = (): IRegisterUserError => ({ type: REGISTER_USER_ERROR })
// запрос данных о пользователе
const getUserRequest = (): IGetUserRequest => ({ type: GET_USER_REQUEST })
const getUserSuccess = (user: TUser): IGetUserSuccess => ({
  type: GET_USER_SUCCESS,
  user: user
})
const getUserError = (): IGetUserError => ({ type: GET_USER_ERROR })
// изменение данных о пользователя
const updateUserRequest = (): IUpdateUserRequest => ({ type: UPDATE_USER_REQUEST })
export const updateUserSuccess = (user: TUser): IUpdateUserSuccess => ({
  type: UPDATE_USER_SUCCESS,
  user: user
})
const updateUserError = (): IUpdateUserError => ({ type: UPDATE_USER_ERROR })
// токен
const updateTokenRequest = (): IUpdateTokenRequest => ({ type: UPDATE_TOKEN_REQUEST })
const updateTokenSuccess = (user: string): IUpdateTokenSuccess => ({
  type: UPDATE_TOKEN_SUCCESS,
  user: user
})
const updateTokenError = (): IUpdateTokenError => ({ type: UPDATE_TOKEN_ERROR })
const ILoginUserRequest = (): ILoginUserRequest => ({ type: LOGIN_USER_REQUEST })
const loginUserSuccess = (user: TUser): ILoginUserSuccess => ({
  type: LOGIN_USER_SUCCESS,
  user: user
})
const loginUserError = (): ILoginUserError => ({ type: LOGIN_USER_ERROR })
// выход
const logoutRequest = (): ILogoutRequest => ({ type: LOGOUT_USER_REQUEST })
const logoutSuccess = (): ILogoutSuccess => ({ type: LOGOUT_USER_SUCCESS })
const logoutError = (): ILogoutError => ({ type: LOGOUT_USER_ERROR })


// запрос на востановление пароля

export const requestCode = (email: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(forgotCodeRequest());
    getPasswordReset(email).then((res) => {
      if (res && res.success) {
        dispatch(forgotCodeSuccess(res));
      }
    })
      .catch(() => dispatch(forgotCodeError()));
  };
};

// регистрация

export const registrationUser: AppThunk = (data: TUser) => {
  return function (dispatch: AppDispatch) {
    dispatch(isRegisterUserRequest());
    getRegistrationUser(data)
      .then((res) => {
        if (res.success) {
          setCookie("token", res.accessToken, { expires: 1200 });
          localStorage.setItem("jwt", res.refreshToken);
          dispatch(
            registerUserSuccess(res.user));
        }
      })
      .catch(() => dispatch(registerUserError()));
  };
};

//обновление токена
export const refreshToken: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch(updateTokenRequest());
    updateToken()
      .then((res) => {
        if (res.success) {
          setCookie("token", res.accessToken, { expires: 1200 });
          localStorage.setItem("jwt", res.refreshToken);
          dispatch(updateTokenSuccess(res.user));
        }
      })
      .catch(() => dispatch(updateTokenError()));
  };
};

export const loginUser: AppThunk = (data: TUser) => {
  return function (dispatch: AppDispatch) {
    dispatch(ILoginUserRequest());
    getUserLogin(data)
      .then((res) => {
        if (res.success) {
          setCookie("token", res.accessToken, { expires: 1200 });
          localStorage.setItem("jwt", res.refreshToken);
          dispatch(loginUserSuccess(res.user));
        }
      })
      .catch((err) => {
        dispatch(loginUserError());
      });
  };
};
// выход

export const logoutUser: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch(logoutRequest());
    getUserLogout()
      .then((res) => {
        if (res.success) {
          localStorage.removeItem("jwt");
          setCookie("token", ' ', { expires: -1 });
          dispatch(logoutSuccess());
        }
      })
      .catch(() => dispatch(logoutError()));
  };
};
export const getUpdateUser: AppThunk = (data: TUser) => {
  return function (dispatch: AppDispatch) {
    dispatch(updateUserRequest());
    updateUser(data)
      .then((res) => {
        dispatch(updateUserSuccess(res.user));
      })
      .catch(() => {
        if (localStorage.getItem("jwt")) {
          dispatch(refreshToken());
          dispatch(updateUser(data));
        } else {
          dispatch(updateUserError());
        }
      });
  };
};
export const authUser: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch(getUserRequest());
    getUser()
      .then((res) => {
        dispatch(getUserSuccess(res.user));
      })
      .catch(() => {
        if (localStorage.getItem("jwt")) {
          dispatch(refreshToken());
          getUser().then((res) => {
            dispatch(getUserSuccess(res.user));
          });
        } else {
          dispatch(getUserError());
        }
      });
  };
};

export const requestPasswordReset: AppThunk = (email: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(resetPasswordRequest());
    getPasswordReset(email)
      .then((res) => {
        console.log(res);
        if (res && res.success) {
          dispatch(resetPasswordSuccess());
        }
      })
      .catch(() => dispatch(resetPasswordFailed()));
  };
};
export const resetPassword: AppThunk = (form: TForm, token: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(resetPasswordRequest());
    setNewPassword(form, token)
      .then(() => {
        dispatch(resetPasswordSuccess());
      })
      .catch(() => dispatch(resetPasswordFailed()));
  };
};

// загрузчик
//export const toggleIsPreloader = (preloader) => ({
//  type: TOGGLE_IS_PRELOADER,
//  preloader,
//});
