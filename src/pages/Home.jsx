import { useEffect, useState } from "react";
import { getAllCategories } from "../api";
import CategoryList from "../components/CategoryList/CategoryList";
import Search from "../components/Search/Search";

const Home = () => {
  const [category, setCategory] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("");

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategory([...data.categories]);
    });
  }, []);

  const handleSearch = (value) => {
    const newCategory = category.filter((el) =>
      el.strCategory.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCategory(newCategory);
    console.log(value);
  };

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <CategoryList
        category={filteredCategory.length > 0 ? filteredCategory : category}
      />
    </div>
  );
};

export default Home;
