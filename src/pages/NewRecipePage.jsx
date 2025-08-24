import React, { useState } from "react";
import { createRecipe } from "../api";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";   // 👈 import your auth hook
import "./NewRecipePage.css";

export default function NewRecipePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const { token } = useAuth();  // 👈 now we have token

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("ingredients", JSON.stringify(ingredients.split("\n")));
    formData.append("instructions", JSON.stringify(instructions.split("\n")));
    formData.append("category", category);
    if (image) formData.append("image", image);

    try {
      await createRecipe(formData, token); // 👈 pass token properly
      alert("Recipe added successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Failed to add recipe.");
    }
  };

  return (
    <div className="newrecipe-container">
      <div className="newrecipe-box">
        <h2 className="newrecipe-title">Add New Recipe</h2>
        <form onSubmit={handleSubmit} className="newrecipe-form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="newrecipe-input"
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="newrecipe-input"
            required
          />
          <textarea
            placeholder="Ingredients (one per line)"
            value={ingredients}
            onChange={e => setIngredients(e.target.value)}
            className="newrecipe-textarea"
            required
          />
          <textarea
            placeholder="Instructions (one per line)"
            value={instructions}
            onChange={e => setInstructions(e.target.value)}
            className="newrecipe-textarea"
            required
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="newrecipe-input"
            required
          />
          <input
            type="file"
            onChange={e => setImage(e.target.files[0])}
            className="newrecipe-input"
          />
          <button type="submit" className="newrecipe-button">Create Recipe</button>
        </form>
      </div>
    </div>
  );
}
