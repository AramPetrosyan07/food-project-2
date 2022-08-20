import React, { useContext, useState } from "react";
import { Context } from "../../Context";
import "./BasketItem.css";

const BasketItem = ({ el }) => {
  let { order, setOrder } = useContext(Context);

  const increment = (el) => {
    const newOrder = order.map((item) => {
      if (item.idMeal === el.idMeal) {
        return {
          ...item,
          count: item.count + 1,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };
  const decrement = (el) => {
    const newOrder = order.map((item) => {
      if (item.idMeal === el.idMeal && el.count > 0) {
        return {
          ...item,
          count: item.count - 1,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };

  const dell = (el) => {
    const newOrder = order.filter((item) => el.idMeal !== item.idMeal);
    setOrder(newOrder);
  };

  return (
    <div className="BasketItem">
      <div className="basketItem">
        <div className="itemLeft">
          <p>{el.strMeal}</p>
          <img src={el.strMealThumb} alt="" />
        </div>
        <div className="itemRight">
          <button onClick={() => decrement(el)}>
            <i className="fa-solid fa-minus"></i>
          </button>
          <span>{el.count}</span>
          <button onClick={() => increment(el)}>
            <i className="fa-solid fa-plus"></i>
          </button>
          <button onClick={() => dell(el)}>
            <i className="fa-solid fa-x"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
