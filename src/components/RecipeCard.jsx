import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  // ✅ Priority:
  // 1. Dummy image (direct URL)
  // 2. Backend full imageUrl
  // 3. Backend relative imageUrl (prepend API)
  // 4. Fallback
  const imageSrc =
    recipe.image // dummy recipes
      ? recipe.image
      : recipe.imageUrl && recipe.imageUrl.startsWith("http")
      ? recipe.imageUrl // full URL from DB
      : recipe.imageUrl
      ? `${process.env.REACT_APP_API_URL}${recipe.imageUrl}` // relative path from DB
      : "https://placehold.co/200x200?text=No+Image"; // fallback

  return (
    <div
      className="recipe-card"
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}
    >
      <img
        src={imageSrc}
        alt={recipe?.title || "Recipe"}
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/200x200?text=No+Image";
        }}
      />
      <h3>{recipe.title}</h3>
      {/* backend wali recipe me _id hoga, dummy wali me nahi */}
      {recipe._id && (
        <Link to={`/recipe/${recipe._id}`} className="view-btn">
          View Recipe
        </Link>
      )}
    </div>
  );
}

