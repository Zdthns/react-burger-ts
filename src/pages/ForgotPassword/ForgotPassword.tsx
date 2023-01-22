import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "../style.module.css";
import Form from "../../components/Form/Form";
import { requestCode } from "../../services/actions/user";
import { IformFields, TStringFunc } from "../../utils/types/types";

const ForgotPassword: React.FC = () => {
  const [form, setForm] = React.useState({ email: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const fields: IformFields[] = [
    { name: "email", placeholder: "Укажите e-mail", type: "email" },
  ];

  const onChange = (evt: React.ChangeEvent<HTMLFormElement>) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const onSubmit = (evt: React.ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(requestCode(form.email));
    return navigate("/resetpassword", { state: { from: location } });
  };

  return (
    <section className={style.wrapper}>
      <h1>Восстановление пароля</h1>
      <Form
        fields={fields}
        buttonText="Восстановить"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <div className={style.caption}>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
          <Link to="/login" className={style.link}>
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
};
export default ForgotPassword;
