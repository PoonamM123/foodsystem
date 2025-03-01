import React from "react";
import { Link } from "react-router-dom";

const FoodListPage = ({ foodEntries }) => {
  return (
    <div>
      <h2>Food Entries</h2>
      {foodEntries.length > 0 ? (
        <ul>
          {foodEntries.map((food, index) => (
            <li key={index}>
              {food.name} - {food.quantity}g - {food.protein}g Protein, {food.fat}g Fat, {food.carbohydrates}g Carbs
            </li>
          ))}
        </ul>
      ) : (
        <p>No food entries yet.</p>
      )}
      <Link to="/">Add More Food</Link>
    </div>
  );
};

export default FoodListPage;
