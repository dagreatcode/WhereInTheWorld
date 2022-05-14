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
    radius: "150",
    language: "en",
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
        // console.log(response.data.results);
        // const info = response.data.results;
        // info.map((place) => console.log(place));
        // setToGo(response.data.results[0]);
        var allPlaces = response.data.results;
        console.log(allPlaces);
        setToGo(response.data.results);
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
      {/* {toGo.map((places) => (
                <option>{places}</option>
              ))} */}
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
        {/* {info.map((place) => console.log(place))}; 
        {distance},
            {id},
            {location} 
            {name},
            {phone_number},
            {types},
            {website},
            {radius},
            {language}
        
        */}
        {/* {toGo.length ? (
          toGo.map((place) => {
            return (
              <tr key={place._id}>
                <td>{place.name}</td>
                <td>{place.distance}</td>
                <td>{place.phone_number}</td>
                <td>{place.types}</td>
                <td>{place.website}</td>
                <td>{place.radius}</td>
                <td>{place.language}</td>
                <td>
                  <button className="btn btn-secondary">Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })
        ) : (
          <h1>Not Found</h1>
        )}
        <br /> */}
        {/* Name: {toGo.name}
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
        &nbsp;&nbsp;&nbsp;&nbsp;tourist_attraction:
        {toGo.types.tourist_attraction}
        {toGo.types.tourist_attraction} <br />
        website: {toGo.website} <br /> */}
        <button onClick={handleSubmit}>Submit</button>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <table class="table table-success table-striped">
                <thead>
                  <tr>
                    <th scope="col">Place</th>
                    <th scope="col">Distance</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Types</th>
                    <th scope="col">Website</th>
                    <th scope="col">Radius</th>
                    <th scope="col">Language</th>
                  </tr>
                </thead>
                <tbody>
                  {toGo.length ? (
                    toGo.map((place) => {
                      return (
                        <tr key={place._id}>
                          <td>{place.name}</td>
                          <td>{place.distance}</td>
                          <td>{place.phone_number}</td>
                          <td>{place.types}</td>
                          <td>{place.website}</td>
                          <td>{place.radius}</td>
                          <td>{place.language}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <h1>Not Found</h1>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhereToGo;
