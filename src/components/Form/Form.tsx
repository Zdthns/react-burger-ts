import React, { SyntheticEvent, useState } from "react";
import style from "./style.module.css";
import PropTypes from "prop-types";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { TFields } from "../../utils/types/types";

type PropTypes = {
  fields: TFields[];
  buttonText: string;
  form: Array<string>;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
  resetForm?: (() => void) | ((evt: SyntheticEvent) => void);
  buttonVisible?: boolean;
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
