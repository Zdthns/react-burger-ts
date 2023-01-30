import { getOrderNumber } from "../../utils/burger";
import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAILED } from "../../utils/types/constants";
import { TOrderData } from "../../utils/types/types";
import { AppDispatch } from "../store";



export const getOrder = (orderData: TOrderData) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_ORDER_REQUEST,
    });

    getOrderNumber(orderData)
      .then((res) => {
        if (res) {
          dispatch({
            type: GET_ORDER_SUCCESS,
            order: res,
          });
        } else {
          dispatch({
            type: GET_ORDER_FAILED,
          });
        }
      })

      .catch(() => dispatch({ type: GET_ORDER_FAILED }));
  };
}
