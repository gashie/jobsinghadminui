import React, { useState } from "react";

const LocationFilter = ({ locations, handleLocationChange }) => {
  const [showAllLocations, setShowAllLocations] = useState(false);

  return (
    <>
      <div>
        {Object.keys(locations).map((region) => (
          <div key={region}>
            <h6 className="mt-2">{region}</h6>

            {locations[region]
              .slice(0, showAllLocations ? locations[region].length : 5)
              .map((location, index) => (
                <div key={index} className="d-flex gap-1">
                  <div className="form-check">
                    <input
                      style={{
                        backgroundColor: "#244a59",
                      }}
                      className="form-check-input"
                      type="checkbox"
                      id={`locationCheckbox${region}${index}`}
                      onChange={() => handleLocationChange(location)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`locationCheckbox${region}${index}`}
                    >
                      {`${region} - ${location}`}
                    </label>
                  </div>
                </div>
              ))}
          </div>
        ))}

        {Object.keys(locations).some(
          (region) => locations[region].length > 5
        ) && (
          <button
            onClick={() => setShowAllLocations(!showAllLocations)}
            className="btn"
          >
            {showAllLocations ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </>
  );
};

export default LocationFilter;
