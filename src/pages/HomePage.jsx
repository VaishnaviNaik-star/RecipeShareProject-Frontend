import React, { useEffect, useState } from "react";
import "./HomePage.css";
import RecipeCard from "../components/RecipeCard";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dummy categories & selection
  const [dummyCategory, setDummyCategory] = useState("All");
  const dummyCategories = [
    "All",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snacks",
    "Vegan",
  ];

  // Dummy recipes
  const dummyRecipes = [
    {
      id: 1,
      title: "Pancakes",
      category: "Breakfast",
      image:
        "https://supermancooks.com/wp-content/uploads/2023/03/chocolate-pancakes-featured.jpg",
    },
    {
      id: 2,
      title: "Burger",
      category: "Lunch",
      image:
        "https://images.slurrp.com/prod/recipe_images/transcribe/snack/Vegetable-Burger.webp",
    },
    {
      id: 3,
      title: "Pizza",
      category: "Dinner",
      image:
        "https://b.zmtcdn.com/data/pictures/chains/3/143/6e96bfb00b9dd20195385f866d3e0e10_featured_v2.jpg",
    },
    {
      id: 5,
      title: "Nachos",
      category: "Snacks",
      image:
        "https://www.emborg.com/app/uploads/2023/07/1200x900px_3_Step_Nachos_Snack.png",
    },
    {
      id: 6,
      title: "Vegan Salad",
      category: "Vegan",
      image:
        "https://simple-veganista.com/wp-content/uploads/2019/07/vegan-cobb-salad_.jpg",
    },
  ];

  const filteredDummyRecipes =
    dummyCategory === "All"
      ? dummyRecipes
      : dummyRecipes.filter((r) => r.category === dummyCategory);

  useEffect(() => {
  const fetchRecipes = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/recipes`); // ✅ include /api
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setRecipes(data);
      setLoading(false);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to load recipes. Check console for details.");
      setLoading(false);
    }
  };
  fetchRecipes();
}, []);


  return (
    <div className="homepage">
      {/* ======= Backend Recipes Section ======= */}
      <h2 className="section-title">Explore Recipes</h2>
      {loading && <p className="loading">Loading recipes...</p>}
      {error && <p className="error">{error}</p>}

      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>

      {/* ======= Dummy Recipes Section ======= */}
      <h2 className="section-title">Try These Recipes</h2>
      <div className="categories-bar">
        {dummyCategories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${dummyCategory === cat ? "active" : ""}`}
            onClick={() => setDummyCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="recipes-grid">
        {filteredDummyRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

