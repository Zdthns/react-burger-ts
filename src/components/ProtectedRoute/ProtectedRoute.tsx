import { Route, redirect, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactNode } from "react";
import { AppStateType } from "../../services/reducers/root";

interface IrouterProvider {
  children?: ReactNode;
  anonymous: boolean;
}

const RouterProvider = ({ children, anonymous = false }: IrouterProvider) => {
  const { isAuth } = useSelector((state: AppStateType) => state.user);
  const location = useLocation();

  if (!anonymous && !isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (anonymous && isAuth) {
    const { from } = location?.state || { from: { pathname: "/" } };
    return <Navigate to={from.pathname} state={from.state} replace />;
  }
  return children;
};

export default RouterProvider;
