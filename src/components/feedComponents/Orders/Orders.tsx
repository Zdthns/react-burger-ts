import { useLocation, Link } from "react-router-dom";

import style from "../style.module.css";
import Order from "../../Order/Order";
import { TOrderDetails } from "../../../utils/types/types";

export function Orders({ data }: { data: TOrderDetails[] }) {
  const location = useLocation();
  const orders = data;

  return (
    <>
      {orders?.map((order) => {
        return (
          <Link
            state={{ background: location }}
            to={{
              pathname: `${location.pathname}/${order._id}`,
            }}
            className={style.link}
            key={order._id}
          >
            <Order
              status=""
              orderNumber={order.number}
              orderCreateTime={order.createdAt}
              burgerName={order.name}
              ingredients={order.ingredients}
            />
          </Link>
        );
      })}
    </>
  );
}
export default Orders;
