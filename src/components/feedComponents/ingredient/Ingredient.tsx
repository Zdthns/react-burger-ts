import React from "react";
import style from "../style.module.css";

function Ingredient({
  ingredientimage,
  ingredientName,
}: {
  ingredientimage: string;
  ingredientName: string;
}) {
  return (
    <div className={style.border}>
      <div className={style.item}>
        <img className={style.img} src={ingredientimage} alt={ingredientName} />
      </div>
    </div>
  );
}

export default Ingredient;
