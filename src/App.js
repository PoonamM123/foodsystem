import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import FoodEntryPage from "./pages/FoodEntryPage";
import FoodListPage from "./pages/FoodListPage";

const App = () => {
  const [foodEntries, setFoodEntries] = useState([]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("foodEntries")) || [];
    setFoodEntries(savedEntries);
  }, []);


  useEffect(() => {
    localStorage.setItem("foodEntries", JSON.stringify(foodEntries));
  }, [foodEntries]);

  return (
    <Routes>
      <Route path="/" element={<FoodEntryPage setFoodEntries={setFoodEntries} />} />
      <Route path="/food-list" element={<FoodListPage foodEntries={foodEntries} />} />
    </Routes>
  );
};

export default App;