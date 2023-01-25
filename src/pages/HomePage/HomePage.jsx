import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import style from "../style.module.css";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";

function HomePage({ openIngredientModal, createOrder }) {
  return (
    <>
      <main className={style.main}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients openModal={openIngredientModal} />
          <BurgerConstructor openOrderDetails={createOrder} />
        </DndProvider>
      </main>
    </>
  );
}
export default HomePage;
