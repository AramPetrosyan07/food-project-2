import React from "react";
import { useState } from "react";

export const Context = React.createContext();

const ContextProvider = (props) => {
  const [filterCatalogy, setFilterCatalogy] = useState([]);
  const [meal, setMeal] = useState([]);
  const [load, setLoad] = useState(true);
  const [order, setOrder] = useState([]);
  const [loadMeal, setLoadMeal] = useState(true);

  return (
    <Context.Provider
      value={{
        filterCatalogy,
        setFilterCatalogy,
        meal,
        setMeal,
        load,
        setLoad,
        order,
        setOrder,
        loadMeal,
        setLoadMeal,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { ContextProvider };
