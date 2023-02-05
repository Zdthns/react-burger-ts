import { TOrder, TOrderNumber, TOrderDetails } from "../../utils/types/types";

export const WS_CONNECTION_START = "WS_CONNECTION_START";
export const WS_CONNECTION_SUCCESS = "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR = "WS_CONNECTION_ERROR";
export const WS_CONNECTION_CLOSED = "WS_CONNECTION_CLOSED";
export const WS_GET_MESSAGE = "WS_GET_MESSAGE";
export const WS_SEND_MESSAGE = "WS_SEND_MESSAGE";
export const WS_CONNECTION_CLOSE = "WS_CONNECTION_CLOSE";

export const WS_USER_CONNECTION_START = "WS_USER_CONNECTION_START";
export const WS_USER_CONNECTION_SUCCESS = "WS_USER_CONNECTION_SUCCESS";
export const WS_USER_CONNECTION_ERROR = "WS_USER_CONNECTION_ERROR";
export const WS_USER_CONNECTION_CLOSED = "WS_USER_CONNECTION_CLOSED";
export const WS_USER_GET_MESSAGE = "WS_USER_GET_MESSAGE";
export const WS_USER_CONNECTION_CLOSE = "WS_USER_CONNECTION_CLOSE";
export const WS_USER_SEND_MESSAGE = "WS_USER_SEND_MESSAGE";

export type wsActionsTypeApplication =
  wsActionsType
  | wsUserActionsType

export type wsActionsType = {
  wsInit: typeof WS_CONNECTION_START,
  onOpen: typeof WS_CONNECTION_SUCCESS,
  onClose: typeof WS_CONNECTION_CLOSE,
  onError: typeof WS_CONNECTION_ERROR,
  wsSendMessage: typeof WS_SEND_MESSAGE,
  onMessage: typeof WS_GET_MESSAGE,
  wsClose: typeof WS_CONNECTION_CLOSED,
};

export type wsUserActionsType = {
  wsInit: typeof WS_USER_CONNECTION_START,
  onOpen: typeof WS_USER_CONNECTION_SUCCESS,
  onClose: typeof WS_USER_CONNECTION_CLOSE,
  onError: typeof WS_USER_CONNECTION_ERROR,
  onMessage: typeof WS_USER_GET_MESSAGE,
  wsSendMessage: typeof WS_USER_SEND_MESSAGE,
  wsClose: typeof WS_USER_CONNECTION_CLOSED,
};



export const wsActions: wsActionsType = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSE,
  onError: WS_CONNECTION_ERROR,
  wsSendMessage: WS_SEND_MESSAGE,
  onMessage: WS_GET_MESSAGE,
  wsClose: WS_CONNECTION_CLOSED,
};

export const wsUserActions: wsUserActionsType = {
  wsInit: WS_USER_CONNECTION_START,
  onOpen: WS_USER_CONNECTION_SUCCESS,
  onClose: WS_USER_CONNECTION_CLOSE,
  onError: WS_USER_CONNECTION_ERROR,
  onMessage: WS_USER_GET_MESSAGE,
  wsSendMessage: WS_USER_SEND_MESSAGE,
  wsClose: WS_USER_CONNECTION_CLOSED,
};


export type wsConectType =
  IwsConnectionStartType
  | IwsConnectionSuccessType
  | IwsConnectionErrorType
  | IwsConnectionClosedType
  | IwsConnectionCloseType
  | IwsGetMessageType
  | IwsUserConnectionStartType
  | IwsUserConnectionStartType
  | IwsUserConnectionSuccessType
  | IwsUserGetMessageType
  | IwsUserSendMessageType
  | IwsUserConnectionErrorType
  | IwsUserConnectionClosedType
  | IwsUserConnectionCloseType

export interface IwsConnectionStartType {
  readonly type: typeof WS_CONNECTION_START;
  readonly url: string;
};
export interface IwsConnectionSuccessType {
  readonly type: typeof WS_CONNECTION_SUCCESS;
};
export interface IwsConnectionErrorType {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: any
};
export interface IwsConnectionClosedType {
  readonly type: typeof WS_CONNECTION_CLOSED;
};
export interface IwsConnectionCloseType {
  readonly type: typeof WS_CONNECTION_CLOSE;
};
export interface IwsGetMessageType {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: string[];
};
export interface IwsUserConnectionStartType {
  readonly type: typeof WS_USER_CONNECTION_START;
  readonly payload: {
    readonly url: string;
  };
}
export interface IwsUserConnectionSuccessType {
  readonly type: typeof WS_USER_CONNECTION_SUCCESS;
};
export interface IwsUserGetMessageType {
  readonly type: typeof WS_USER_GET_MESSAGE;
  readonly payload: TOrderDetails;
};
export interface IwsUserSendMessageType {
  readonly type: typeof WS_USER_SEND_MESSAGE;
  readonly payload: TOrder
};
export interface IwsUserConnectionErrorType {
  readonly type: typeof WS_USER_CONNECTION_ERROR;
  readonly payload: any;
};
export interface IwsUserConnectionClosedType {
  readonly type: typeof WS_USER_CONNECTION_CLOSED;
};
export interface IwsUserConnectionCloseType {
  readonly type: typeof WS_USER_CONNECTION_CLOSE;
};

export const wsConnectionStart = (url: string): IwsConnectionStartType => {
  return {
    type: WS_CONNECTION_START,
    url,
  };
};

export const wsConnectionSuccess = (): IwsConnectionSuccessType => {
  return {
    type: WS_CONNECTION_SUCCESS,
  };
};

export const wsConnectionError = (error: any): IwsConnectionErrorType => {
  return {
    type: WS_CONNECTION_ERROR,
    payload: error
  };
};

export const wsConnectionClosed = (): IwsConnectionClosedType => {
  return {
    type: WS_CONNECTION_CLOSED,
  };
};
export const wsConnectionClose = (): IwsConnectionCloseType => {
  return {
    type: WS_CONNECTION_CLOSE,
  };
};

export const wsGetMessage = (message: string[]): IwsGetMessageType => {
  return {
    type: WS_GET_MESSAGE,
    payload: message,
  };
};

export const wsUserConnectionStart = (url: string): IwsUserConnectionStartType => {
  return {
    type: WS_USER_CONNECTION_START,
    payload: {
      url,
    },
  };
};

export const wsUserConnectionSuccess = (): IwsUserConnectionSuccessType => {
  return {
    type: WS_USER_CONNECTION_SUCCESS,
  };
};

export const wsUserGetMessage = (userMessage: TOrderDetails): IwsUserGetMessageType => {
  return {
    type: WS_USER_GET_MESSAGE,
    payload: userMessage
  };
};

export const wsUserSendMessage = (order: TOrder): IwsUserSendMessageType => {

  return {
    type: WS_USER_SEND_MESSAGE,
    payload: order,
  };
};
export const wsUserConnectionError = (error: any): IwsUserConnectionErrorType => {
  return {
    type: WS_USER_CONNECTION_ERROR,
    payload: error
  };
};
export const wsUserConnectionClosed = (): IwsUserConnectionClosedType => {
  return {
    type: WS_USER_CONNECTION_CLOSED,
  };
};
export const wsUserConnectionClose = (): IwsUserConnectionCloseType => {
  return {
    type: WS_USER_CONNECTION_CLOSE,
  };
};
