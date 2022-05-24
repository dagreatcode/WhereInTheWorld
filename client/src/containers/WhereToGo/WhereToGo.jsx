import React, { useState, useEffect } from "react";
import axios from "axios";

const WhereToGo = () => {
  const [toGo, setToGo] = useState({
    address: "",
    distance: 0,
    id: "",
    location: { lat: 0, lng: 0 },
    name: "",
    phone_number: 0,
    types: [],
    website: "",
    radius: "150",
    language: "en",
  });
  // const [where, setWhere] = useState({
  //   location: {},
  //   latitude: 0,
  //   longitude: 0,
  // });

  useEffect(() => {
  //  navigator.geolocation.getCurrentPosition(function (position) {
      // console.log("Latitude is :", position.coords.latitude);
      // console.log("Longitude is :", position.coords.longitude);
      // const [latitude, longitude] = position.coords;
      // const lat = position.coords.latitude;
      // const lng = position.coords.longitude;
    //   setWhere({
    //     location: {
    //       latitude: position.coords.latitude,
    //       longitude: position.coords.longitude,
    //     },
    //     // location: `position.coords.latitude``position.coords.longitude`,
    //     latitude: position.coords.latitude,
    //     longitude: position.coords.longitude,
    //   });
    //   // setWhere({latitude: position.coords.latitude, longitude: position.coords.longitude});
    // });
  }, []);
  // const options = {
  //   method: "GET",
  //   url: "https://trueway-places.p.rapidapi.com/FindPlacesNearby",
  //   params: {
  //     // TODO: Add in location from state somehow. FIXME:
  //     // This works // params: { country: covidNewsState.country, day: covidNewsState.day },
  //     location: `37.783366,-122.402325`,
  //     // location: where.location,
  //     // location: "latitude,longitude",
  //     radius: toGo.radius,
  //     language: toGo.language,
  //   },
  //   headers: {
  //     "X-RapidAPI-Host": "trueway-places.p.rapidapi.com",
  //     "X-RapidAPI-Key": "d45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1",
  //   },
  // };
  const handleSubmit = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      axios
        .request({
          method: "GET",
          url: "https://trueway-places.p.rapidapi.com/FindPlacesNearby",
          params: {
            // TODO: Add in location from state somehow. FIXME:
            // This works // params: { country: covidNewsState.country, day: covidNewsState.day },
            location: `${lat},${lng}`,
            // location: where.location,
            // location: "latitude,longitude",
            radius: toGo.radius,
            language: toGo.language,
          },
          headers: {
            "X-RapidAPI-Host": "trueway-places.p.rapidapi.com",
            "X-RapidAPI-Key":
              "d45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1",
          },
        })
        .then(function (response) {
          // console.log(response.data.results);
          // const info = response.data.results;
          // info.map((place) => console.log(place));
          // setToGo(response.data.results[0]);
          // var allPlaces = response.data.results;
          // console.log(allPlaces);
          console.log(response.data);
          setToGo(response.data.results);
        })
        .catch(function (error) {
          console.error(error);
        });
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
            <h6>Radius</h6>
            <input
              type="text"
              name="Radius"
              value={toGo.radius}
              onChange={handleInputChange}
              className="radius"
              placeholder="radius"
            />
          </label>
        </div>
        <h6>language</h6>
        <input
          value={toGo.language}
          name="language"
          onChange={handleInputChange}
          type="text"
          placeholder="en"
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
              <table className="table table-success table-striped">
                <thead>
                  <tr>
                    <th scope="col">Place</th>
                    <th scope="col">Distance</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Types</th>
                    <th scope="col">Website</th>
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
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <th>Not Found Until Summit</th>
                    </tr>
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
