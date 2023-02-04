import React from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";
import { useAppSelector } from "../../services/hook/hook";

const IngredientPage = () => {
  //const { id } = useParams();
  const ingredients = useAppSelector(
    (store) => store.ingredientDetails.currentIngredient
  );

  return (
    <div className={style.container}>
      {ingredients && <IngredientDetails />}
    </div>
  );
};

export default IngredientPage;
