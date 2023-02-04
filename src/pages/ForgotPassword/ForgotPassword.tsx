import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "../style.module.css";
import Form from "../../components/Form/Form";
import { requestCode } from "../../services/actions/user";
import { TFields } from "../../utils/types/types";
import { useAppDispatch } from "../../services/hook/hook";

const ForgotPassword: React.FC = () => {
  const [form, setForm] = useState({ email: "" });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const fields: TFields[] = [
    { name: "email", placeholder: "Укажите e-mail", type: "email" },
  ];

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
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
