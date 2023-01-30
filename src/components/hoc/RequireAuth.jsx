import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAppSelector } from "../../services/hook/hook";

function RequireAuth({ children }) {
  const location = useLocation();
  const { isAuth } = useAppSelector((store) => store.user);

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export default RequireAuth;
