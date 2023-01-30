import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import style from "./style.module.css";
import Form from "../../components/Form/Form";
import { loginUser } from "../../services/actions/user";
import { useAppDispatch } from "../../services/hook/hook";

function LoginPage() {
  const [form, setForm] = React.useState({ email: "", password: "" });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const location = useLocation();

  const fromPage = location.state?.from?.pathname || "/";

  const fields = [
    { name: "email", placeholder: "e-mail", type: "text" },
    { name: "password", placeholder: "пароль", type: "password" },
  ];

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const onSubmit = (evt: React.ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(loginUser(form));
  };

  return (
    <section className={style.wrapper}>
      <h1>Вход</h1>

      <Form
        fields={fields}
        buttonText="  Войти"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
      />

      <div className={style.caption}>
        <p>
          <span>Вы — новый пользователь?</span>
          <NavLink to="/register">Зарегистрироваться</NavLink>
        </p>
        <p>
          Забыли пароль?
          <NavLink to="/forgotpassword">Восстановить пароль</NavLink>
        </p>
      </div>
    </section>
  );
}
export default LoginPage;
