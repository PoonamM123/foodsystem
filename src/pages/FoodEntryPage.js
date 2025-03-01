import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FoodEntryPage = ({ setFoodEntries }) => {
  const [foodData, setFoodData] = useState({
    name: "",
    quantity: "",
    protein: "",
    fat: "",
    carbohydrates: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodData({ ...foodData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[a-zA-Z\s]+$/.test(foodData.name)) {
      alert("Food name must contain only letters.");
      return;
    }
    if (
      isNaN(foodData.quantity) ||
      isNaN(foodData.protein) ||
      isNaN(foodData.fat) ||
      isNaN(foodData.carbohydrates)
    ) {
      alert("Quantity and nutrient values must be numbers.");
      return;
    }

    setFoodEntries((prev) => {
      const updatedEntries = [...prev, foodData];
      localStorage.setItem("foodEntries", JSON.stringify(updatedEntries));
      return updatedEntries;
    });

    navigate("/food-list");
  };

  return (
    <div className="container">
      <h2>Add Food Entry</h2>
      <form onSubmit={handleSubmit}>
        {["name", "quantity", "protein", "fat", "carbohydrates"].map((field) => (
          <div key={field}>
            <label>
              {field.charAt(0).toUpperCase() + field.slice(1)}:
              <input
                type="text"
                name={field}
                value={foodData[field]}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FoodEntryPage;
