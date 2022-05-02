import React, { useState } from "react";
import axios from "axios";

const WhereToGo = () => {
  const [toGo, setToGo] = useState({
    address: "",
    distance: 0,
    id: "",
    location: { lat: 0, lng: 0 },
    name: "",
    phone_number: "",
    types: [],
    website: "",
  });

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

  const handleSubmit = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results);
        // const info = response.data.results[0];
        setToGo(response.data.results[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setToGo({
      ...toGo,
      [name]: value,
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <label>
            <h6>Place name</h6>
            <input
              type="text"
              name="name"
              value={toGo.name}
              onChange={handleInputChange}
              className="name"
              placeholder="name"
            />
          </label>
        </div>
        <h6>Number to call</h6>
        <input
          value={toGo.phone_number}
          name="phone_number"
          onChange={handleInputChange}
          type="text"
          placeholder="phone number"
        />
        <br />
        Name: {toGo.name}
        <br />
        Address: {toGo.address}
        <br />
        Number: {toGo.phone_number}
        <br />
        Distance: {toGo.distance}
        <br />
        ID: {toGo.id}
        <br />
        location <br />
        &nbsp;&nbsp;&nbsp;&nbsp;Lat: {toGo.location.lat} <br />
        &nbsp;&nbsp;&nbsp;&nbsp;Lng: {toGo.location.lng} <br />
        types <br />
        &nbsp;&nbsp;&nbsp;&nbsp;museum:{toGo.types.museum} <br />
        &nbsp;&nbsp;&nbsp;&nbsp;tourist_attraction:{toGo.types.tourist_attraction}
        {toGo.types.tourist_attraction} <br />
        website: {toGo.website} <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default WhereToGo;
