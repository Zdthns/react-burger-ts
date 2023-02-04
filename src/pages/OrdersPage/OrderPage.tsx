import { FC, useEffect } from "react";
import style from "./style.module.css";

import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../services/hook/hook";
import {
  wsUserConnectionStart,
  wsUserConnectionClose,
  wsUserConnectionClosed,
} from "../../services/actions/wsConect";
import { getCookie } from "../../utils/cookie.js";
import { wsUserUrl } from "../../utils/userApi.js";
import Orders from "../../components/feedComponents/Orders/Orders";
import NavBar from "../../components/profileComponents/NavBar/NavBar";
import Caption from "../../components/profileComponents/Caption/Caption";

const OrderPage: FC = () => {
  const dispatch = useAppDispatch();
  const token = getCookie("token");
  useEffect(() => {
    dispatch(
      wsUserConnectionStart(
        `${wsUserUrl}?token=${token?.replace("Bearer ", "")}`
      )
    );
    return () => {
      dispatch(wsUserConnectionClosed());
    };
  }, [dispatch, token]);

  const orders = useAppSelector((store) => store.wsReducer.userMessages.orders);

  return (
    <section className={style.section_wrapper}>
      <div>
        <NavBar />
        <Caption />
      </div>
      <ul className={style.section}>
        <Orders data={orders} />
      </ul>
    </section>
  );
};

export default OrderPage;
