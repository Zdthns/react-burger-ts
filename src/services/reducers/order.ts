import { PayloadAction } from "@reduxjs/toolkit";
import { TOrderDetails } from "../../utils/types/types";
import {
  GET_ORDER_REQUEST,
  GET_ORDER_FAILED,
  GET_ORDER_SUCCESS,
} from "../actions/order";
type orderType ={
  number: null | number
}

type initialStateType ={
  order: TOrderDetails,
  orderRequest: boolean,
  orderFailed: boolean,
}
const initialState = {
  order: {
    number: null,
  },
  orderRequest: false,
  orderFailed: false,
};

const orderReducer = (state = initialState, action:PayloadAction) => {
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
