import React from "react";

const MonthFilter = ({ selectedMonths, handleMonthChange }) => {
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];


  return (
    <div>
      {months.map((month, index) => (
        <div key={index} className="form-check">
          <input
            style={{ backgroundColor: "#244a59" }}
            className="form-check-input"
            type="checkbox"
            id={`monthCheckbox${index}`}
            checked={selectedMonths.includes(month)}
            onChange={() => handleMonthChange(month)}
          />
          <label className="form-check-label" htmlFor={`monthCheckbox${index}`}>
            {month}
          </label>
        </div>
      ))}
    </div>
  );
};

export default MonthFilter;
