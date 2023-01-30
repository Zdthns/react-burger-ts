import { useState } from "react";
import style from "./style.module.css";
import Form from "../../components/Form/Form";
import { getUpdateUser } from "../../services/actions/user.js";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "../../components/profileComponents/NavBar/NavBar";
import OrderPage from "../OrdersPage/OrderPage";
import Caption from "../../components/profileComponents/Caption/Caption";
import { useAppDispatch, useAppSelector } from "../../services/hook/hook";
import { IUser } from "../../utils/types/types";

function Profile() {
  const { user } = useAppSelector((store) => store.user);
  const [buttonVisible, setButtonVisible] = useState(false);

  const [form, setForm] = useState<IUser>({
    name: user.name,
    login: user.email,
    password: "",
  });
  const dispatch = useAppDispatch();

  const fields = [
    { name: "name", placeholder: "имя", type: "text", icon: "EditIcon" },
    { name: "login", placeholder: "логин", type: "text", icon: "EditIcon" },
    {
      name: "password",
      placeholder: "пароль",
      type: "password",
      icon: undefined,
    },
  ];

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
    setButtonVisible(true);
  };

  const onSubmit = (evt: React.ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(getUpdateUser(form));
  };

  function resetForm(evt: React.ChangeEvent<HTMLFormElement>) {
    evt.preventDefault();
    setForm({ ...user, name: user.name, login: user.email, password: "" });
    setButtonVisible(false);
  }
  return (
    <section className={style.section}>
      <div className={style.profile_wrapper}>
        <div className={style.nav}>
          {" "}
          <NavBar />
          <Caption />
        </div>
        <div className={style.section_form}>
          <Routes>
            <Route
              path="/"
              element={
                <Form
                  fields={fields}
                  buttonText="Сохранить"
                  form={form}
                  onChange={onChange}
                  onSubmit={onSubmit}
                  resetForm={resetForm}
                  buttonVisible={buttonVisible}
                />
              }
            />
            <Route path="/orders" element={<OrderPage />} />
          </Routes>
        </div>
      </div>
    </section>
  );
}
export default Profile;
