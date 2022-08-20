import React, { useContext } from "react";
import { Context } from "../../Context";
import FilterCatItem from "../FilterCatItem/FilterCatItem";
import "./FilterCatList.css";

const FilterCatList = () => {
  let { filterCatalogy, setFilterCatalogy } = useContext(Context);

  return (
    <div className="FilterCatList-body">
      <div className="FilterCatList">
        {filterCatalogy.map((el, ind) => (
          <FilterCatItem key={ind} item={el} />
        ))}
      </div>
    </div>
  );
};

export default FilterCatList;
