import React, { useState } from "react";
import jobCategoriesData from "../../../../../common/data/categories.json";

const CategoryFilter = ({ selectedCategories, setSelectedCategories }) => {
  const [showAll, setShowAll] = useState(false);
  const categoriesToDisplay = showAll ? jobCategoriesData.categories : jobCategoriesData.categories.slice(0, 5);


  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
  };

  return (
    <div>
      {categoriesToDisplay.map((category, index) => (
        <div key={index} className="form-check">
          <input
            style={{ backgroundColor: "#244a59" }}
            className="form-check-input"
            type="checkbox"
            id={`categoryCheckbox${index}`}
            checked={selectedCategories.includes(category)}
            onChange={() => handleCategoryChange(category)}
          />
          <label
            className="form-check-label"
            htmlFor={`categoryCheckbox${index}`}
          >
            {category}
          </label>
        </div>
      ))}

      {jobCategoriesData.categories.length > 5 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="btn btn-light mt-2"
          style={{ padding: "0.1rem" }}
        >
          {showAll ? "Show Less" : "Show More"}
          <i className={`bx bx-chevron-${showAll ? "up" : "down"}`}></i>
        </button>
      )}
    </div>
  );
};

export default CategoryFilter;
