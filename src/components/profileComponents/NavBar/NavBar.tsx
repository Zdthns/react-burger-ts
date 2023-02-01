import React, { FC } from "react";
import { logoutUser } from "../../../services/actions/user";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";
import CustomLink from "../../CastomLink/CustomLink";
import { useAppDispatch } from "../../../services/hook/hook";

const NavBar: FC = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(logoutUser());
  };
  return (
    <nav className={style.nav}>
      <ul>
        <li className={style.list}>
          {" "}
          <CustomLink to="/profile">Профиль</CustomLink>
        </li>
        <li className={style.list}>
          {" "}
          <CustomLink to="/profile/orders">История заказов</CustomLink>
        </li>
        <li className={style.list}>
          {" "}
          <button
            type="button"
            className={`${style.button} text text_type_main-medium text_color_inactive`}
            onClick={logout}
          >
            {" "}
            Выход
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
