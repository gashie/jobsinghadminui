import React from 'react';
import { Col } from 'reactstrap';

const YearFilter = ({ selectedYear, handleYearChange }) => {
  const years = ["2023", "2024"];

  return (
    <>
      {years.map((year, index) => (
       
          <div className="form-check" key={index}>
            <input
              style={{ backgroundColor: "#244a59" }}
              className="form-check-input"
              type="checkbox"
              id={`yearChecked${index}`}
              checked={selectedYear === year} // Use strict equality to compare the selected year
              onChange={() => handleYearChange(year)} // Pass the selected year directly
            />
            <label className="form-check-label" htmlFor={`yearChecked${index}`}>
              {year}
            </label>
          </div>
       
      ))}
    </>
  );
};

export default YearFilter;
