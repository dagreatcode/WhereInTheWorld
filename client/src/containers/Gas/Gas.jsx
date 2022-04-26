import React, { Component } from "react";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://gas-price.p.rapidapi.com/stateUsaPrice",
  params: { state: "GA" },
  headers: {
    "X-RapidAPI-Host": "gas-price.p.rapidapi.com",
    "X-RapidAPI-Key": "d45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1",
  },
};

class Gas extends Component {

    state = {
        
    }

  componentDidMount() {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  render() {
    return <div></div>;
  }
}

export default Gas;
