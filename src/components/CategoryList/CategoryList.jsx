import "./CategoryList.css";
import CategoryItem from "../CategoryItem/CategoryItem";

const CategoryList = ({ category }) => {
  return (
    <div className="CategoryList-body">
      <div className="CategoryList">
        {category.map((el) => (
          <CategoryItem key={el.idCategory} el={el} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
