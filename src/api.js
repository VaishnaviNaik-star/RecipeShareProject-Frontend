

import axios from "axios";

// Use environment variable for backend URL
const API_URL = `${process.env.REACT_APP_API_URL}/api`;

// =================== Recipes ===================

// Get all recipes
export const getRecipes = async () => {
  const res = await axios.get(`${API_URL}/recipes`);
  return res.data;
};

// Get single recipe by ID
export const getRecipe = async (id) => {
  const res = await axios.get(`${API_URL}/recipes/${id}`);
  return res.data;
};

// Create recipe (with image upload)
export const createRecipe = async (formData, token) => {
  const res = await axios.post(`${API_URL}/recipes`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
  return res.data;
};

// Post comment
export const postComment = async (recipeId, text, token) => {
  const res = await axios.post(
    `${API_URL}/recipes/${recipeId}/comments`,
    { text },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};

// Favorite / unfavorite recipe
export const favoriteRecipe = async (recipeId, token) => {
  const res = await axios.post(
    `${API_URL}/recipes/${recipeId}/favorite`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};

// =================== Auth ===================

export const login = async (credentials) => {
  const res = await axios.post(`${API_URL}/auth/login`, credentials);
  return res.data;
};

export const signup = async (user) => {
  const res = await axios.post(`${API_URL}/auth/signup`, user);
  return res.data;
};
