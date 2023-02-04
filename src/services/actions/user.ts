
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

// запрос на востановление пароля

export const requestCode: AppThunk = (email: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: FORGOT_CODE_REQUEST });
    getPasswordReset(email).then((res) => {
      if (res && res.success) {
        dispatch({ type: FORGOT_CODE_SUCCESS });
      }
    })
      .catch(() => dispatch({ type: FORGOT_CODE_ERROR }));
  };
};

// регистрация

export const registrationUser: AppThunk = (data: TUser) => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: REGISTER_USER_REQUEST });
    getRegistrationUser(data)
      .then((res) => {
        if (res.success) {
          setCookie("token", res.accessToken, { expires: 1200 });
          localStorage.setItem("jwt", res.refreshToken);
          dispatch({
            type: REGISTER_USER_SUCCESS,
            user: res.user,
          });
        }
      })
      .catch(() => dispatch({ type: REGISTER_USER_ERROR }));
  };
};

//обновление токена
export const refreshToken: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: UPDATE_TOKEN_REQUEST });
    updateToken()
      .then((res) => {
        if (res.success) {
          setCookie("token", res.accessToken, { expires: 1200 });
          localStorage.setItem("jwt", res.refreshToken);
          dispatch({
            type: UPDATE_TOKEN_SUCCESS,
            user: res.user,
          });
        }
      })
      .catch(() => dispatch({ type: UPDATE_TOKEN_ERROR }));
  };
};

export const loginUser: AppThunk = (data: IUser) => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: LOGIN_USER_REQUEST });
    getUserLogin(data)
      .then((res) => {
        if (res.success) {
          setCookie("token", res.accessToken, { expires: 1200 });
          localStorage.setItem("jwt", res.refreshToken);
          dispatch({
            type: LOGIN_USER_SUCCESS,
            user: res.user,
          });
        }
      })
      .catch((err) => {
        dispatch({ type: LOGIN_USER_ERROR });
      });
  };
};
// выход

export const logoutUser: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: LOGOUT_USER_REQUEST });
    getUserLogout()
      .then((res) => {
        if (res.success) {
          localStorage.removeItem("jwt");
          setCookie("token", null, { expires: -1 });
          dispatch({ type: LOGOUT_USER_SUCCESS });
        }
      })
      .catch(() => dispatch({ type: LOGOUT_USER_ERROR }));
  };
};
export const getUpdateUser: AppThunk = (data: IUser) => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: UPDATE_USER_REQUEST });
    updateUser(data)
      .then((res) => {
        dispatch({
          type: UPDATE_USER_SUCCESS,
          user: res.user,
        });
      })
      .catch(() => {
        if (localStorage.getItem("jwt")) {
          dispatch(refreshToken());
          dispatch(updateUser(data));
        } else {
          dispatch({ type: UPDATE_USER_ERROR });
        }
      });
  };
};
export const authUser: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: GET_USER_REQUEST });
    getUser()
      .then((res) => {
        dispatch({
          type: GET_USER_SUCCESS,
          user: res.user,
        });
      })
      .catch(() => {
        if (localStorage.getItem("jwt")) {
          dispatch(refreshToken());
          getUser().then((res) => {
            dispatch({
              type: GET_USER_SUCCESS,
              user: res.user,
            });
          });
        } else {
          dispatch({ type: GET_USER_ERROR });
        }
      });
  };
};

export const requestPasswordReset: AppThunk = (email: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });
    getPasswordReset(email)
      .then((res) => {
        console.log(res);
        if (res && res.success) {
          dispatch({ type: FORGOT_PASSWORD_SUCCESS });
        }
      })
      .catch(() => dispatch({ type: FORGOT_PASSWORD_ERROR }));
  };
};
export const resetPassword: AppThunk = (form: TForm, token: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });
    setNewPassword(form, token)
      .then(() => {
        dispatch({ type: FORGOT_PASSWORD_SUCCESS });
      })
      .catch(() => dispatch({ type: FORGOT_PASSWORD_ERROR }));
  };
};

// загрузчик
//export const toggleIsPreloader = (preloader) => ({
//  type: TOGGLE_IS_PRELOADER,
//  preloader,
//});
