import React, { useContext } from "react";
import { useState } from "react";
import { Context } from "../../Context";
import BasketItem from "../BasketItem/BasketItem";
import "./Basket.css";

const Basket = () => {
  let { order, setOrder } = useContext(Context);
  const [bool, setBool] = useState(false);

  const openBasket = () => {
    setBool(!bool);
  };

  return (
    <>
      <div className={bool ? "BasketBody" : "displayNone"}>
        <div className="basketPopup">
          {order.map((el, ind) => (
            <BasketItem el={el} key={ind} />
          ))}
        </div>
      </div>

      <div className="Basket" onClick={() => openBasket()}>
        <i className="fa-solid fa-basket-shopping"></i>
        <p className="count">{order.length}</p>
      </div>
    </>
  );
};

export default Basket;
