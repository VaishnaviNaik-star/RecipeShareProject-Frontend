import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// 🔹 Automatically attach token from localStorage
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Recipes
export const getRecipes = async () => {
  const res = await API.get("/recipes");
  return res.data;
};

export const getRecipe = async (id) => {
  const res = await API.get(`/recipes/${id}`);
  return res.data;
};

export const createRecipe = async (recipe) => {
  const res = await API.post("/recipes", recipe);
  return res.data;
};

// Comments
export const postComment = async (recipeId, comment) => {
  const res = await API.post(`/recipes/${recipeId}/comments`, { comment });
  return res.data;
};

// Rating
export const rateRecipe = async (recipeId, rating) => {
  const res = await API.post(`/recipes/${recipeId}/rate`, { rating });
  return res.data;
};

// Favorites
export const favoriteRecipe = async (recipeId) => {
  const res = await API.post(`/recipes/${recipeId}/favorite`);
  return res.data;
};

// Auth
export const login = async (credentials) => {
  const res = await API.post("/auth/login", credentials);
  return res.data; // { user, token }
};

export const signup = async (user) => {
  const res = await API.post("/auth/signup", user);
  return res.data;
};
