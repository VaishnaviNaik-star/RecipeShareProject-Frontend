import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  // Only DB image, no fallback
  const imageSrc =
    recipe?.imageUrl && recipe.imageUrl.startsWith("http")
      ? recipe.imageUrl
      : recipe?.imageUrl
      ? `${process.env.REACT_APP_API_URL}${recipe.imageUrl}`
      : null; // no image if not in DB

  return (
    <div
      className="recipe-card"
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={recipe?.title || "Recipe Image"}
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      )}
      <h3>{recipe.title}</h3>
      <Link to={`/recipe/${recipe._id}`} className="view-btn">
        View Recipe
      </Link>
    </div>
  );
}
