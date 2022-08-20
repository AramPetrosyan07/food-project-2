import { API_URL } from "./Config";

const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return response.json();
}

const getFilteredCategory = async (catName) => {
    const response = await fetch(API_URL + 'filter.php?c=' + catName);
    return response.json();
}


const getMealById = async (id) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + id);
    return response.json();
}

const getRandomMeal = async (id) => {
    const response = await fetch('www.themealdb.com/api/json/v1/1/random.php');
    return response.json();
}




export { getAllCategories, getFilteredCategory, getMealById, getRandomMeal };