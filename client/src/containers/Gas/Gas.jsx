import React, { Component } from "react";
import axios from "axios";

class Gas extends Component {

    state = {

    }

  handleSubmit() {
    const options = {
      method: 'GET',
      url: 'https://gas-price.p.rapidapi.com/stateUsaPrice',
      params: {state: 'GA'},
      headers: {
        'X-RapidAPI-Host': 'gas-price.p.rapidapi.com',
        'X-RapidAPI-Key': 'd45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1'
      }
    };
  
    axios.request(options).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.error(error);
    });
  }



  render() {
    return <div>
      <h1>Page Is In Construction. Gas API is 5 calls per month.</h1>
    </div>;
  }
}

export default Gas;
