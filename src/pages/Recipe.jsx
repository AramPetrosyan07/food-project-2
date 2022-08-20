import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Context } from "../Context";
import "./pages_css/Recipe.css";

const Recipe = () => {
  let [text, setText] = useState([]);
  let { meal, setMeal } = useContext(Context);

  useEffect(() => {
    const texts = [];
    for (let i in meal[0]) {
      if (i.slice(0, 13) === "strIngredient" && meal[0]?.[i] !== "") {
        texts.push(meal[0]?.[i]);
      }
    }
    setText([...texts]);
  }, [meal]);

  return (
    <div className="Recipe-body">
      <div className="Recipe">
        <div className="divForBg">
          <p className="strArea">{meal[0]?.strArea} food</p>
          <p className="name">{meal[0]?.strMeal}</p>
          <p className="strCategory">{meal[0]?.strCategory} category</p>
        </div>
        <div className="flexRecipe">
          <div className="imgDiv">
            <img src={meal[0]?.strMealThumb} alt="" />
          </div>
          <div className="inside_flexRecipe">
            <div className="ingredients">
              Ingredients -
              {text.map((el, ind) => (
                <span key={ind}>{el}, </span>
              ))}
            </div>
            <p className="Instructions">{meal[0]?.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
