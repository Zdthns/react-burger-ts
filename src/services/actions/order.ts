import { getOrderNumber } from "../../utils/burger";
import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAILED } from "../../utils/types/constants";
import { TOrderNumber } from "../../utils/types/types";
import { AppDispatch } from "../store";

export type order =
  IdetOrderRequest
  | IdetOrderSuccess
  | IdetOrderFailed

interface IdetOrderRequest {
  readonly type: typeof GET_ORDER_REQUEST,
}
interface IdetOrderSuccess {
  readonly type: typeof GET_ORDER_SUCCESS,
  readonly order: Response,
}
interface IdetOrderFailed {
  readonly type: typeof GET_ORDER_FAILED,
}

const detOrderRequest = (): IdetOrderRequest => {
  type: GET_ORDER_REQUEST
}
const detOrderSuccess = () => {
  type: GET_ORDER_SUCCESS
  order: Response,
}
const detOrderFailed = () => {
  type: GET_ORDER_FAILED
}

export const getOrder = (orderData: TOrderNumber) => {
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
