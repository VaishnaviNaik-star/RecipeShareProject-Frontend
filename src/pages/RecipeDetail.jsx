// src/pages/RecipeDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipe, postComment, favoriteRecipe } from "../api";
import useAuth from "../hooks/useAuth";
import "./RecipeDetail.css";

export default function RecipeDetail() {
  const { id } = useParams();
  const { user, token } = useAuth();
  const [recipe, setRecipe] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await getRecipe(id);
      setRecipe(data);
    };
    fetchRecipe();
  }, [id]);

  const handleComment = async () => {
    if (!token) return alert("Login first to comment");
    const updated = await postComment(id, newComment, token);
    setRecipe(updated);
    setNewComment("");
  };

  const handleFavorite = async () => {
    if (!token) return alert("Login first to favorite");
    await favoriteRecipe(id, token);
    alert("Favorite updated!");
  };

  const handleRating = (star) => {
    setRating(star);
    alert(`You rated ${star} stars!`);
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>{recipe.title}</h2>
      <img
  src={`http://localhost:5000${recipe.imageUrl}`}
  alt={recipe.title}
  onError={(e) => (e.target.src = "https://source.unsplash.com/400x300/?food")}
/>


      <p className="desc">{recipe.description}</p>

      {/* Ingredients */}
      {recipe.ingredients && (
        <div className="ingredients">
          <h3>📝 Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Instructions */}
      {recipe.instructions && (
        <div className="instructions">
          <h3>👩‍🍳 Instructions</h3>
          <ol>
            {recipe.instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      {/* Favorite */}
      <button className="favorite-btn" onClick={handleFavorite}>
        ❤️ Favorite
      </button>

      {/* Rating */}
      <div className="rating-section">
        <h3>⭐ Rate this Recipe</h3>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleRating(star)}
            style={{
              cursor: "pointer",
              fontSize: "1.5rem",
              color: star <= rating ? "gold" : "gray",
            }}
          >
            ★
          </span>
        ))}
      </div>

      {/* Comments */}
      <div className="comments-section">
        <h3>💬 Comments</h3>

        <div className="comments-list">
          {recipe.comments?.map((c, i) => (
            <div className="comment-box" key={i}>
              <strong>{c.user?.name || "Anonymous"}:</strong>
              <p>{c.text}</p>
            </div>
          ))}
        </div>

        <div className="add-comment-box">
          <textarea
            value={newComment}
            placeholder="Write your comment..."
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleComment}>🚀 Post Comment</button>
        </div>
      </div>
    </div>
  );
}

