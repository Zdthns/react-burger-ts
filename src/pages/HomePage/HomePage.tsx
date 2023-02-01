import React, { FC } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import style from "../style.module.css";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";

type PropsType = {
  openIngredientModal: () => void;
  createOrder: () => void;
};

const HomePage: FC<PropsType> = ({ openIngredientModal, createOrder }) => {
  return (
    <>
      <main className={style.main}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients openModal={openIngredientModal} />
          <BurgerConstructor createOrder={createOrder} />
        </DndProvider>
      </main>
    </>
  );
};
export default HomePage;
