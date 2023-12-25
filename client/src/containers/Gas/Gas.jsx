import React, { Component } from "react";
import axios from "axios";

class Gas extends Component {
	state = {};

	handleSubmit() {
		// https://rapidapi.com/collectapi/api/gas-price/
		const options = {
			method: "GET",
			url: "https://gas-price.p.rapidapi.com/stateUsaPrice",
			params: { state: "GA" },
			headers: {
				"X-RapidAPI-Host": "gas-price.p.rapidapi.com",
				"X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
			},
		};

		axios
			.request(options)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.error(error);
			});
	}

// 	const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://gas-price.p.rapidapi.com/allUsaPrice',
//   headers: {
//     'X-RapidAPI-Key': 'd45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1',
//     'X-RapidAPI-Host': 'gas-price.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

	// https://rapidapi.com/apiasahobby-_viBbiGVh6v/api/fuel-prices2/

	componentDidMount() {}

	render() {
		return (
			<div>
				<h1>Page Is In Construction. Gas API is 10 calls per month.</h1>
			</div>
		);
	}
}

export default Gas;
