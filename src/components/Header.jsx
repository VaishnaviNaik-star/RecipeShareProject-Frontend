import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import header-specific CSS

export default function Header({ user, logout }) {
  return (
    <header className="header">
      <h1>🍽️ Delicious Recipes</h1>
      <nav>
        <Link to="/">Home</Link>
        {user ? (
          <>
            <Link to="/my-favorites">Favorites</Link>
            <Link to="/new-recipe">Add Recipe</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </nav>
    </header>
  );
}
