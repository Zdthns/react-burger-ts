import { PayloadAction } from "@reduxjs/toolkit";
import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAILED } from "../../utils/types/constants";
import { TOrderDetails } from "../../utils/types/types";
import { TActions } from "../actions/actionType";



type orderType = {
  number: null | number //TOrderDetails
}

type initialStateType = {
  order: orderType,
  orderRequest: boolean,
  orderFailed: boolean,
}
const initialState: initialStateType = {
  order: {
    number: null,
  },
  orderRequest: false,
  orderFailed: false,
};

const orderReducer = (state = initialState, action: TActions) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.order,
        orderRequest: false,
      };
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderFailed: true,
        orderRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default orderReducer;
