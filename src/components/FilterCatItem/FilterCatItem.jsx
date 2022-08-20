import React, { useContext } from "react";
import "./FilterCatItem.css";
import { NavLink as Link } from "react-router-dom";
import { getMealById } from "../../api";
import { Context } from "../../Context";
import Loading from "../../Loading/Loading";

const FilterCatItem = ({ item }) => {
  let { meal, setMeal, order, setOrder, loadMeal } = useContext(Context);

  const MealById = async (id) => {
    getMealById(id).then((data) => {
      setMeal([data.meals[0]]);
    });
  };

  const addToOrder = (el) => {
    console.log(el);
    const itemIndex = order.findIndex((item) => el.idMeal === item.idMeal);
    if (itemIndex === -1) {
      setOrder([{ ...el, count: 1 }, ...order]);
    } else {
      return order;
    }
  };

  return (
    <>
      {loadMeal ? (
        <Loading />
      ) : (
        <div className="FilterCatItem">
          <img
            src={item.strMealThumb}
            alt=""
            onClick={() => addToOrder(item)}
          />
          <div className="marginleft">
            <Link
              className="filterText"
              to={`/recipe/:${item.idMeal}`}
              onClick={() => MealById(item.idMeal)}
            >
              {item.strMeal}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterCatItem;
