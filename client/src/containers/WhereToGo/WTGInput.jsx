import React from "react";
import PropTypes from "prop-types";

const WTGInput = ({ label, id, value, name, placeholder, handleChange }) => {
	return (
		<div className="form-group">
			<label htmlFor="places">{label}</label>
			<input
				type="text"
				className="form-control"
				value={value}
				id={id}
				name={name}
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</div>
	);
};

WTGInput.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default WTGInput;
