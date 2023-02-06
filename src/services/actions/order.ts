import { getOrderNumber } from "../../utils/burger";
import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAILED } from "../../utils/types/constants";
import { Iingredient, TOrderDetails, TOrderNumber } from "../../utils/types/types";
import { AppDispatch, AppThunk } from "../store";

export type order =
  IdetOrderRequest
  | IdetOrderSuccess
  | IdetOrderFailed


interface IdetOrderRequest {
  readonly type: typeof GET_ORDER_REQUEST,
}

interface IdetOrderSuccess {
  readonly type: typeof GET_ORDER_SUCCESS,
  readonly order: TOrderDetails

}
interface IdetOrderFailed {
  readonly type: typeof GET_ORDER_FAILED,
}

const detOrderRequest = (): IdetOrderRequest => ({ type: GET_ORDER_REQUEST })
const detOrderSuccess = (res: TOrderDetails): IdetOrderSuccess => ({
  type: GET_ORDER_SUCCESS,
  order: res
})
const detOrderFailed = (): IdetOrderFailed => ({ type: GET_ORDER_FAILED })

export const getOrder: AppThunk = (orderData) => {
  return function (dispatch: AppDispatch) {
    dispatch(detOrderRequest());
    getOrderNumber(orderData)
      .then((res) => {
        if (res) {
          dispatch(detOrderSuccess(res));
        } else {
          dispatch(detOrderFailed());
        }
      })

      .catch(() => dispatch(detOrderFailed()));
  };
}
