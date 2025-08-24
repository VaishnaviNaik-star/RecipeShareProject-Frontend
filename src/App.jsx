import React from "react";
import { Routes, Route } from "react-router-dom";
import useAuth from "./hooks/useAuth";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import RecipeDetail from "./pages/RecipeDetail";
import NewRecipePage from "./pages/NewRecipePage";
import MyFavorites from "./pages/MyFavorites";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  const { user, signup, login, logout } = useAuth(); // added signup

  return (
    <>
      <Header user={user} logout={logout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/new-recipe" element={<NewRecipePage />} />
        <Route path="/my-favorites" element={<MyFavorites />} />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route
          path="/signup"
          element={
            <Signup
              onSignup={(name, email, password) => {
                signup(name, email, password);
                window.location.href = "/";
              }}
            />
          }
        />
      </Routes>
    </>
  );
}
