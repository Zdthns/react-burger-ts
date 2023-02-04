import { TUser } from "../../utils/types/types";
import {
  FORGOT_CODE_REQUEST,
  FORGOT_CODE_ERROR,
  FORGOT_CODE_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
  TOGGLE_IS_PRELOADER,
  UPDATE_TOKEN_REQUEST,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN_ERROR,
} from "../../utils/types/constants";


export type initialStateUserType = {
  user: TUser | null,
  isAuth: boolean,

  // востановление пароля
  isCodeRequest: boolean,
  isCodeFailed: boolean,
  isReplacePassword: boolean,

  isReplacePasswordRequest: boolean,
  isReplacePasswordSuccess: boolean,
  isReplacePasswordFailed: boolean,
  //регистрация
  IsRegisterUserRequest: boolean,
  IsRegisterUserSuccess: boolean,
  IsRegisterUserFailed: boolean,
  // запрос данных пользователя
  isGetUserRequest: boolean,
  isGetUserSuccess: boolean,
  isGetUserFailed: boolean,
  // обновление данных пользователя
  isUpdateUserRequest: boolean,
  isUpdateUserSuccess: boolean,
  isUpdateUserFailed: boolean,
  //авторизация
  isAuthUserRequest: boolean,
  isAuthUserFailed: boolean,
  // логин
  isLoginUserRequest: boolean,
  isLoginUserSuccess: boolean,
  isLoginUserFailed: boolean,
  //выход
  isLogoutUserRequest: boolean,
  isLogoutUserFailed: boolean,
  // токен
  isTokenRequest: boolean,
  isTokenSuccess: boolean,
  isTokenFailed: boolean,
  //загрузка
  preloader: boolean,
}

interface IForgotCodeRequest {
  readonly type: typeof FORGOT_CODE_REQUEST;
}
// запрос выполнился успешно
interface IForgotCodeSuccess {
  readonly type: typeof FORGOT_CODE_SUCCESS;
}
// запрос выполнился с ошибкой
interface IForgotCodeError{
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
  readonly user: TUser;
}
 interface IUpdateTokenError {
  readonly type: typeof UPDATE_TOKEN_ERROR;
}

 interface ILoginUserRequest  {
  readonly type: typeof LOGIN_USER_REQUEST;
}
 interface ILoginUserSuccess  {
  readonly type: typeof LOGIN_USER_SUCCESS;
}
 interface ILoginUserError {
  readonly type: typeof LOGIN_USER_ERROR;
}
// выход
export interface ILogoutRequest {
  readonly type: typeof LOGOUT_USER_REQUEST;
}
export interface ILogoutSuccess {
  readonly type: typeof LOGOUT_USER_SUCCESS;
}
export interface ILogoutError {
  readonly type: typeof LOGOUT_USER_ERROR;
}


const initialState: initialStateUserType = {
  user: null,
  isAuth: false,

  // востановление пароля
  isCodeRequest: false,
  isCodeFailed: false,
  isReplacePassword: false,

  isReplacePasswordRequest: false,
  isReplacePasswordSuccess: true,
  isReplacePasswordFailed: false,
  //регистрация
  IsRegisterUserRequest: false,
  IsRegisterUserSuccess: false,
  IsRegisterUserFailed: false,
  // запрос данных пользователя
  isGetUserRequest: false,
  isGetUserSuccess: false,
  isGetUserFailed: false,
  // обновление данных пользователя
  isUpdateUserRequest: false,
  isUpdateUserSuccess: false,
  isUpdateUserFailed: false,
  //авторизация
  isAuthUserRequest: false,
  isAuthUserFailed: false,
  // логин
  isLoginUserRequest: false,
  isLoginUserSuccess: false,
  isLoginUserFailed: false,
  //выход
  isLogoutUserRequest: false,
  isLogoutUserFailed: false,
  // токен
  isTokenRequest: false,
  isTokenSuccess: false,
  isTokenFailed: false,
  //загрузка
  preloader: false,
};
const userReducer = (state: initialStateUserType = initialState, action: any): initialStateUserType => {
  switch (action.type) {
    // востановление пароля
    // запрос начал выполняться
    case FORGOT_CODE_REQUEST: {
      return {
        ...state,
        isCodeRequest: true,
        isCodeFailed: false,
      };
    }
    // запрос выполнился успешно
    case FORGOT_CODE_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        isCodeRequest: false,
        isCodeFailed: false,
        isReplacePassword: true,
      };
    }
    // запрос выполнился с ошибкой
    case FORGOT_CODE_ERROR: {
      return {
        ...state,
        isCodeRequest: false,
        isCodeFailed: true,
        isAuth: false,
      };
    }
    // запрос вып
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        isReplacePasswordRequest: true,
        isReplacePasswordFailed: false,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        isReplacePasswordRequest: false,
        isReplacePasswordSuccess: true,
        isReplacePasswordFailed: false,
      };
    }
    case FORGOT_PASSWORD_ERROR: {
      return {
        ...state,
        isReplacePassword: false,
        isReplacePasswordFailed: true,
      };
    }
    // Регистрация
    case REGISTER_USER_REQUEST: {
      return {
        ...state,
        IsRegisterUserRequest: true,
        IsRegisterUserSuccess: false,
        isAuth: false,
      };
    }
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        IsRegisterUserRequest: false,
        IsRegisterUserSuccess: true,
        isAuth: true,
      };
    }
    case REGISTER_USER_ERROR: {
      return {
        ...state,
        IsRegisterUserFailed: true,
        IsRegisterUserSuccess: false,
      };
    }
    // запрос данных о пользователе
    case GET_USER_REQUEST: {
      return {
        ...state,
        isGetUserRequest: true,
        isGetUserFailed: false,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isAuth: true,
        isGetUserRequest: false,
        isGetUserFailed: false,
      };
    }

    case GET_USER_ERROR: {
      return {
        ...state,
        isGetUserRequest: false,
        isGetUserFailed: true,
      };
    }
    // изменение данных о пользователя
    case UPDATE_USER_REQUEST: {
      return {
        ...state,
        isUpdateUserRequest: true,
        isUpdateUserFailed: false,
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isUpdateUserRequest: false,
        isUpdateUserFailed: false,
      };
    }
    case UPDATE_USER_ERROR: {
      return {
        ...state,
        isUpdateUserRequest: false,
        isUpdateUserFailed: true,
      };
    }
    // токен
    case UPDATE_TOKEN_REQUEST: {
      return {
        ...state,
        isTokenRequest: true,
        isTokenSuccess: false,
        isTokenFailed: false,
      };
    }
    case UPDATE_TOKEN_SUCCESS: {
      return {
        ...state,
        isTokenRequest: false,
        isTokenSuccess: true,
        isTokenFailed: false,
      };
    }
    case UPDATE_TOKEN_ERROR: {
      return {
        ...state,
        isTokenRequest: false,
        isTokenSuccess: false,
        isTokenFailed: true,
      };
    }

    case LOGIN_USER_REQUEST: {
      return {
        ...state,
        isLoginUserRequest: true,
        isLoginUserFailed: false,
      };
    }
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isAuth: true,
        isLoginUserRequest: false,
        isLoginUserFailed: false,
      };
    }
    case LOGIN_USER_ERROR: {
      return {
        ...state,
        isLoginUserRequest: false,
        isLoginUserFailed: true,
      };
    }
    // выход
    case LOGOUT_USER_REQUEST: {
      return {
        ...state,

        isLogoutUserRequest: true,
        isLogoutUserFailed: false,
      };
    }
    case LOGOUT_USER_SUCCESS: {
      return {
        ...state,
        isAuth: false,
        user: null,
        isLogoutUserRequest: false,
        isLogoutUserFailed: false,
      };
    }
    case LOGOUT_USER_ERROR: {
      return {
        ...state,
        isAuth: false,
        isLogoutUserRequest: false,
        isLogoutUserFailed: true,
      };
    }
    //прелоадер
    //case TOGGLE_IS_PRELOADER: {
    //  return {
    //    ...state,
    //    TOGGLE_IS_PRELOADER: action.preloader,
    //  };
    //}
    default: {
      return state;
    }
  }
};
export default userReducer;
