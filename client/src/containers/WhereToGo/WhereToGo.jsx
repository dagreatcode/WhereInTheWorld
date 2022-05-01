import React, { Component } from "react";
import axios from "axios";

class WhereToGo extends Component {
  state = {
    address: "",
    distance: 0,
    id: "",
    location: { lat: 0, lng: 0 },
    name: "Children's Creativity Museum",
    phone_number: "",
    types: [],
    website: "",
  };

  handleSubmit = (event) => { 

    const options = {
      method: "GET",
      url: "https://trueway-places.p.rapidapi.com/FindPlacesNearby",
      params: {
        location: "37.783366,-122.402325",
        radius: "150",
        language: "en",
      },
      headers: {
        "X-RapidAPI-Host": "trueway-places.p.rapidapi.com",
        "X-RapidAPI-Key": "d45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results[0]);
        const info = response.data.results[0];
        const { name, value } = event.value;
        // this.setState({
        //   address: "ok",
        // })
        // this.setState(response.data.results[0]);
        // console.log(this.state);
        // this.stateState({
        //   address: info.address,
        //   distance: 0,
        //   id: "",
        //   location: { lat: 37.783366, lng: -122.402325 },
        //   name: "Children's Creativity Museum",
        //   phone_number: "",
        //   types: [],
        //   website: "",
        // });
            this.setState({
      [name]: value
    });

      })
      .catch(function (error) {
        console.error(error);
      });
  }
  // handleInputChange = event => {
  //   // Getting the value and name of the input which triggered the change
  //   let value = event.target.value;
  //   const name = event.target.name;

  //   if (name === "password") {
  //     value = value.substring(0, 15);
  //   }
  //   // Updating the input's state
  //   this.setState({
  //     [name]: value
  //   });
  // };

    // // handleIncrement increments this.state.count by 1
    // handleIncrement = () => {
    //   // We always use the setState method to update a component's state
    //   this.setState({ count: this.state.count + 1 });
    // };
    // {() => setState({ ...state, mood: "lazy" })}

  render() {
    return (
      <div>
        <button onClick={this.handleSubmit}>go</button>
        <h1>Address: {this.state.address}</h1>
      </div>
    );
  }
}

export default WhereToGo;
