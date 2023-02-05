import { PayloadAction } from "@reduxjs/toolkit";
import { TOrderDetails } from "../../utils/types/types";
import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_CLOSE,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,
  WS_USER_CONNECTION_SUCCESS,
  WS_USER_CONNECTION_ERROR,
  WS_USER_CONNECTION_CLOSED,
  WS_USER_GET_MESSAGE,
  WS_USER_CONNECTION_START,
  wsConectType,
} from "../actions/wsConect";

type message = {
  orders: Array<TOrderDetails>,
  total: number,
  totalToday: number,
}
type userMessages = {
  orders: Array<TOrderDetails>,
  total: number,
  totalToday: number,
}
type initialStateType = {
  wsConnected: boolean,
  wsError: string | undefined,
  messages: message
  userMessages: userMessages
};

const initialState: initialStateType = {
  wsConnected: false,
  wsError: undefined,
  messages: {
    orders: [],
    total: 0,
    totalToday: 0,
  },
  userMessages: {
    orders: [],
    total: 0,
    totalToday: 0,
  },
};

const wsReducer = (state = initialState, action: PayloadAction<wsConectType>) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
        wsError: undefined,
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
        wsError: action.payload,
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
        wsError: undefined,
      };

    case WS_GET_MESSAGE:
      return {
        ...state,
        messages: { ...state.messages, ...action.payload },
      };
    case WS_CONNECTION_CLOSE:
      return {
        ...initialState,
        wsConnected: false,
      };

    case WS_USER_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
        wsError: undefined,
      };

    case WS_USER_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
        wsError: action.payload,
      };

    case WS_USER_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
        wsError: undefined,
      };

    case WS_USER_GET_MESSAGE:
      return {
        ...state,
        wsError: undefined,
        userMessages: { ...state.userMessages, ...action.payload },
      };

    default: {
      return state;
    }
  }
};

export default wsReducer;
