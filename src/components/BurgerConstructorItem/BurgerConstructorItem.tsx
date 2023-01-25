import style from "./burgerConstructorItem.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { useDrag, useDrop, XYCoord } from "react-dnd";
import PropTypes from "prop-types";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import {
  DELETE_INGREDIENT_FROM_CONSTRUCTOR,
  moveItems,
} from "../../services/actions/constructor.js";
import { TIngredient } from "../../utils/types/types";

type TconstructorItemProps = {
  item: TIngredient;
  index: number;
};

const BurgerConstructorItem = React.memo((props: TconstructorItemProps) => {
  const dispatch = useDispatch();

  const deleteElement = (evt: React.MouseEvent, item: any) => {
    evt.preventDefault();
    dispatch({
      type: DELETE_INGREDIENT_FROM_CONSTRUCTOR,
      id: item.key,
    });
  };
  const ref = React.useRef<HTMLDivElement | null>(null);

  const [, drop] = useDrop({
    accept: "constructorIngredient",
    hover: (item: { index: number }, monitor) => {
      if (!ref.current) {
        return;
      }

      const dragIndex: number = item.index;
      const hoverIndex: number = props.index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch(moveItems(dragIndex, hoverIndex));

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "constructorIngredient",
    item: () => {
      return { id: props.item.key, index: props.index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      className={`${style.item} ${isDragging && style.isDragging} mb-4`}
      ref={ref}
      draggable={true}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        isLocked={false}
        text={props.item.name}
        price={props.item.price}
        thumbnail={props.item.image}
        handleClose={() => deleteElement(evt, props.item)}
      />
    </div>
  );
});

export default BurgerConstructorItem;
