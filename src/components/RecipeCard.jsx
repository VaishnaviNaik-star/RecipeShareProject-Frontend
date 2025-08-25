
import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  // Determine the correct image URL
  const imageSrc =
    recipe?.imageUrl // uploaded recipes
      ? recipe.imageUrl.startsWith("http") // full URL
        ? recipe.imageUrl
        : `${process.env.REACT_APP_API_URL}${recipe.imageUrl}` // use backend URL from env
      : recipe?.image // seeded recipes
      ? recipe.image
      : "https://source.unsplash.com/400x300/?food"; // fallback

  return (
    <div className="recipe-card" style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <img
        src={imageSrc}
        alt={recipe?.title || "Recipe Image"}
        style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "8px" }}
      />
      <h3>{recipe.title}</h3>
      <Link to={`/recipe/${recipe._id}`} className="view-btn">
        View Recipe
      </Link>
    </div>
  );
}
