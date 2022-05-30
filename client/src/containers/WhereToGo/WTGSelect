import React from "react";
import PropTypes from "prop-types";

const WTGSelect = ({ label, id, value, name, handleChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="places">{label}</label>
      <select
        name={name}
        className="custom-select"
        id={id}
        value={value}
        onChange={handleChange}
        // handleChange={(e) => {
        //   setTypesState(e.target.value);
        // }}
      >
        <option value="">Select...</option>
        {typeOfPlaces.map((place) => (
          <option value={place} key={place}>
            {place}
          </option>
        ))}
      </select>
    </div>
  );
};

WTGSelect.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default WTGSelect;
