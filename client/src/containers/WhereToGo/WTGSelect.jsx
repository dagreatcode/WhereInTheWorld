import React from "react";
import PropTypes from "prop-types";
const typeOfPlaces = [
	"airport",
	"amusement_park",
	"aquarium",
	"art_gallery",
	"atm",
	"bakery",
	"bank",
	"bar",
	"beauty_salon",
	"bicycle_store",
	"book_store",
	"bowling",
	"bus_station",
	"cafe",
	"campground",
	"car_dealer",
	"car_rental",
	"car_repair",
	"car_wash",
	"casino",
	"cemetery",
	"church",
	"cinema",
	"city_hall",
	"clothing_store",
	"convenience_store",
	"courthouse",
	"dentist",
	"department_store",
	"doctor",
	"electrician",
	"electronics_store",
	"embassy",
	"fire_station",
	"flowers_store",
	"funeral_service",
	"furniture_store",
	"gas_station",
	"government_office",
	"grocery_store",
	"gym",
	"hairdressing_salon",
	"hardware_store",
	"home_goods_store",
	"hospital",
	"insurance_agency",
	"jewelry_store",
	"laundry",
	"lawyer",
	"library",
	"liquor_store",
	"locksmith",
	"lodging",
	"mosque",
	"museum",
	"night_club",
	"park",
	"parking",
	"pet_store",
	"pharmacy",
	"plumber",
	"police_station",
	"post_office",
	"primary_school",
	"rail_station",
	"real_estate_agency",
	"restaurant",
	"rv_park",
	"school",
	"secondary_school",
	"shoe_store",
	"shopping_center",
	"spa",
	"stadium",
	"storage",
	"store",
	"subway_station",
	"supermarket",
	"synagogue",
	"taxi_stand",
	"temple",
	"tourist_attraction",
	"train_station",
	"transit_station",
	"travel_agency",
	"university",
	"veterinarian",
	"zoo",
];

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
