import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { rootReducer } from "./reducers/root.js";
import thunk, { ThunkAction } from "redux-thunk";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { wsUrl, wsUserUrl } from "../utils/userApi";
import { wsActions, wsUserActions } from "./actions/wsConect";
import { ActionCreator, Action } from "@reduxjs/toolkit";
import { TActions } from "./actions/actionType.js";



const composeEnhancers =
  //@ts-ignore
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    //@ts-ignore
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    socketMiddleware(wsUrl, wsActions, false),
    socketMiddleware(wsUserUrl, wsUserActions, true)
  )
);

export const store = createStore(rootReducer, enhancer);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, Action, RootState, TActions>
>;
