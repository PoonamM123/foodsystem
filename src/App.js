import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodEntryPage from "./pages/FoodEntryPage";
import FoodListPage from "./pages/FoodListPage";

const App = () => {
  const [foodEntries, setFoodEntries] = useState([]);

  // Load saved data from localStorage
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("foodEntries")) || [];
    setFoodEntries(savedEntries);
  }, []);

  // Save data to localStorage whenever entries change
  useEffect(() => {
    localStorage.setItem("foodEntries", JSON.stringify(foodEntries));
  }, [foodEntries]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FoodEntryPage setFoodEntries={setFoodEntries} />} />
        <Route path="/food-list" element={<FoodListPage foodEntries={foodEntries} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
