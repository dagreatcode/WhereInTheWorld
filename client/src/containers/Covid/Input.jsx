import React from "react";
import PropTypes from "prop-types";

const Input = ({ label, value, handleInputChange, placeholder, name }) => {
	return (
		<div>
			<label htmlFor="covid">{label}</label>
			<input
				type="text"
				name={name}
				value={value}
				onChange={handleInputChange}
				className="form-control"
				placeholder={placeholder}
			/>
		</div>
	);
};

Input.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
};

export default Input;
