import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddRecipe from "./pages/AddRecipe";
import Recipe from "./pages/Recipe";
import Profile from "./pages/Profile";
import HomeImproved from "./pages/Home_improved";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeImproved />} />
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/addrecipe" element={<AddRecipe />} />
        <Route exact path="/recipe" element={<Recipe />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
