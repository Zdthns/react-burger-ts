import React from "react";
import ReactDOM from "react-dom";

import style from "./modal.module.css";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import ModalOverlay from "../ModalOverlay/ModalOverlay";

import PropTypes from "prop-types";

const popup = document.getElementById("modals");

function Modal({ children, title, onClose }) {
  React.useEffect(() => {
    const close = (evt: React.KeyboardEvent) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("keydown", close);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClick={onClose} />
      <div className={`${style.container} pt-10 pr-10 pb-15 pl-10`}>
        <div className={style.header}>
          {title && <h2 className="text_type_main-large">{title}</h2>}
          <button className={style.closeButton} onClick={onClose}>
            <CloseIcon type="primary" />
          </button>
        </div>
        {children}
      </div>
    </>,
    popup
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
export default Modal;
