import { useMemo, useEffect } from "react";
import style from "./style.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppDispatch, useAppSelector } from "../../services/hook/hook";
import { authUser } from "../../services/actions/user";
import {
  wsUserConnectionStart,
  wsUserConnectionClose,
  wsConnectionStart,
  wsConnectionClose,
} from "../../services/actions/wsConect";
import IngredientInfo from "../feedComponents/IngreditntInfo/IngredientInfo";
import { formatDate } from "../../utils/orders";
import { wsUrl, wsUserUrl } from "../../utils/userApi";

function OrderInfo() {
  const dispatch = useAppDispatch();
  let { id } = useParams();
  const location = useLocation();

  const isProfile = location.pathname.includes("profile");
  const isFeed = location.pathname.includes("feed");

  const userOrders = useAppSelector(
    (store) => store.wsReducer.userMessages.orders
  );

  const allOrders = useAppSelector((store) => store.wsReducer.messages.orders);
  const orders = isProfile ? userOrders : allOrders;

  orders.map((el) => {
    return {
      id: el.id,
    };
  });
  let orderData = orders.find((el) => el._id === id);
  const allIngredients = useAppSelector(
    (store) => store.ingredients.ingredients
  );

  const orderInfo = useMemo(() => {
    if (!orderData || 0) return null;

    const totalOrder = orderData.ingredients.reduce(
      (previousValue, currentItem) => {
        const ingredient = allIngredients.find((item) => {
          return currentItem === item._id;
        });

        if (!ingredient) {
          return previousValue;
        }

        return previousValue + ingredient.price;
      },
      0
    );

    let count = {};

    for (let elem of orderData.ingredients) {
      if (count[elem] === undefined) {
        count[elem] = 1;
      } else {
        count[elem]++;
      }
    }

    orderData.count = count;

    return {
      ...orderData,
      totalOrder,
      count,
    };
  }, [orderData, allIngredients]);

  useEffect(() => {
    if (!orderData) {
      if (isProfile) {
        dispatch(wsUserConnectionStart(wsUserUrl));
      }
      if (isFeed) {
        dispatch(wsConnectionStart(wsUrl));
      }
    }

    return () => {
      if (isProfile) {
        dispatch(wsUserConnectionClose());
      }
      if (isFeed) {
        dispatch(wsConnectionClose());
      }
    };
  }, [dispatch]);

  return (
    <>
      <p className={`text text_type_digits-default mb-10 ${style.number}`}>
        #{orderInfo?.number}
      </p>
      <h3 className="text text_type_main-medium mb-3">{orderInfo?.name}</h3>
      {orderInfo?.status === "done" && (
        <p className={`text text_type_main-default mb-15 ${style.done}`}>
          Выполнен
        </p>
      )}
      {orderInfo?.status === "created" && (
        <p className="text text_type_main-default mb-15">Создан</p>
      )}
      {orderInfo?.status === "pending" && (
        <p className="text text_type_main-default mb-15">Готовится</p>
      )}
      <h3 className="text text_type_main-medium mb-6">Состав:</h3>
      <section className={style.section}>
        {orderInfo?.count &&
          [...new Set(orderInfo?.ingredients)].map((ingredient, index) => (
            <IngredientInfo
              ingredient={ingredient}
              key={index}
              count={orderInfo?.count}
            />
          ))}
      </section>
      <div className={`mt-10 ${style.techinfo}`}>
        <p className="text text_type_main-default text_color_inactive">
          {formatDate(orderInfo?.createdAt)}
        </p>
        <div className={`ml-6 ${style.price}`}>
          <p className="text text_type_digits-default mr-2">
            {orderInfo?.totalOrder}
          </p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </>
  );
}

export default OrderInfo;
