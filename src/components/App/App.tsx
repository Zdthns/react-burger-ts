import { useEffect, useState, FC } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useAppSelector, useAppDispatch } from "../../services/hook/hook";
import style from "./app.module.css";

import Layout from "../Layout/Layout";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import Profile from "../../pages/Profile/Profile";
import NotFound from "../../pages/NotFound/NotFound";

import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { authUser, refreshToken } from "../../services/actions/user";
import { getOrder } from "../../services/actions/order.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../Modal/Modal";
import Feed from "../../pages/Feed/Feed";
import { getIngredients } from "../../services/actions/ingredients.js";
import {
  deleteIngredienData,
  addIngredientData,
} from "../../services/actions/ingredients.js";

import { getCookie } from "../../utils/cookie";

import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import OrderInfo from "../OrderInfo/OrderInfo";
import OrderPage from "../../pages/OrdersPage/OrderPage";
import { Iingredient, TOrder, TOrderNumber } from "../../utils/types/types";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";

const App: FC = () => {
  const { isAuth } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [orderDetailsOpen, setOrderDetailsOpen] = useState(false);
  const { currentIngredient } = useAppSelector(
    (store) => store.ingredientDetails
  );
  const background = location.state?.background;
  const cookie = getCookie("token");

  const refreshTokenData = localStorage.getItem("token");
  const updateTokenSuccess = useAppSelector(
    (store) => store.user.isTokenSuccess
  );
  const [ingredientOpen, setIngredientOpen] = useState(false);

  // order
  const closeModal = () => {
    navigate(-1);
  };
  const closeOrderModal = () => {
    dispatch(deleteIngredienData());
    setOrderDetailsOpen(false);
  };
  const openOrderModal = () => {
    setOrderDetailsOpen(true);
  };
  //ingredient
  const openIngredientModal = (item: Iingredient) => {
    dispatch(addIngredientData(item));
    setIngredientOpen(true);
  };

  useEffect(() => {
    if (!isAuth && localStorage.getItem("jwt")) {
      dispatch(authUser());
    }
  }, []);

  useEffect(() => {
    if (!isAuth && refreshTokenData && cookie) {
      dispatch(authUser());
    }
    if (!cookie && refreshTokenData) {
      dispatch(refreshToken());
    }
    if (cookie && updateTokenSuccess && refreshTokenData && !isAuth) {
      dispatch(authUser());
    }
    dispatch(getIngredients());
  }, [dispatch, refreshTokenData, isAuth, cookie, updateTokenSuccess]);

  const createOrder = (orderData: string[]) => {
    dispatch(getOrder(orderData));
    openOrderModal();
  };

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <main className={style.main}>
                <DndProvider backend={HTML5Backend}>
                  <BurgerIngredients openModal={openIngredientModal} />
                  <BurgerConstructor createOrder={createOrder} />
                </DndProvider>{" "}
              </main>
            }
          />{" "}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/orders"
            element={
              <ProtectedRoute>
                <OrderPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/orders/:id"
            element={
              <ProtectedRoute>
                <OrderInfo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRoute anonymous>
                <LoginPage />
              </ProtectedRoute>
            }
          />
          <Route path="/ingredients/:id" element={<IngredientDetails />} />
          <Route path="/feed/" element={<Feed />} />
          <Route path="/feed/:id" element={<OrderInfo />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal title="Детали ингредиента" onClose={closeModal}>
                <IngredientDetails />
              </Modal>
            }
          />
          <Route
            path="/feed/:id"
            element={
              <Modal title=" " onClose={closeModal}>
                <OrderInfo />
              </Modal>
            }
          />
          <Route
            path="/profile/orders/:id"
            element={
              <ProtectedRoute>
                <Modal title=" " onClose={closeModal}>
                  <OrderInfo />
                </Modal>
              </ProtectedRoute>
            }
          />
        </Routes>
      )}
      {orderDetailsOpen && (
        <Modal title="" onClose={closeOrderModal}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
};

export default App;
