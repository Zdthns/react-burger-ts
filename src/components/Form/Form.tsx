import React, { FormEvent, useState } from "react";
import { IformFields } from "../../utils/types/types";
import style from "./style.module.css";
import PropTypes from "prop-types";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

type PropTypes = {
  fields: [];
  buttonText: string;
  form: any;
  onChange: React.ChangeEvent<HTMLInputElement>;
  onSubmit: React.EventHandler<FormEvent>;
  resetForm?: React.EventHandler<FormEvent>;
  buttonVisible: boolean;
};

const Form: React.FC<PropTypes> = ({
  fields,
  buttonText,
  form,
  onChange,
  onSubmit,
  resetForm,
  buttonVisible,
}) => {
  return (
    <form className={style.form} onSubmit={onSubmit}>
      {fields.map((elem) => (
        <Input
          key={`${elem.name}`}
          type={elem.type}
          name={elem.name}
          value={form[elem.name] || ""}
          placeholder={elem.placeholder}
          onChange={onChange}
          icon={elem.icon}
        />
      ))}
      <div className={style.buttons}>
        {" "}
        <Button htmlType="submit" type="primary" size="medium">
          {buttonText}
        </Button>
        {buttonVisible && (
          <Button
            htmlType="reset"
            type="primary"
            size="medium"
            onClick={resetForm}
          >
            Отмена
          </Button>
        )}
      </div>
    </form>
  );
};

export default Form;
