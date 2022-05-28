import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const WhereToGo = () => {
  const [radiusState] = useState({
    radius: 10000,
  });
  const [languageState, setLangState] = useState("en");
  const [typeState, setTypesState] = useState("");
  const [show, setsShow] = useState(false);
  const handleClose = () => {
    setsShow(!show);
  };
  const handleOpen = () => {
    setsShow(true);
  };
  // const handleShow = () => {};

  const [toGo, setToGo] = useState({
    address: "",
    distance: 0,
    id: "",
    location: { lat: 0, lng: 0 },
    name: "",
    phone_number: 0,
    // types: [],
    website: "",
    // radius: 800,
    // language: "en",
  });
  // const [where, setWhere] = useState({
  //   location: {},
  //   latitude: 0,
  //   longitude: 0,
  // });

  // const typeOfPlaces = [
  //   airport,
  //   amusement_park,
  //   aquarium,
  //   art_gallery,
  //   atm,
  //   bakery,
  //   bank,
  //   bar,
  //   beauty_salon,
  //   bicycle_store,
  //   book_store,
  //   bowling,
  //   bus_station,
  //   cafe,
  //   campground,
  //   car_dealer,
  //   car_rental,
  //   car_repair,
  //   car_wash,
  //   casino,
  //   cemetery,
  //   church,
  //   cinema,
  //   city_hall,
  //   clothing_store,
  //   convenience_store,
  //   courthouse,
  //   dentist,
  //   department_store,
  //   doctor,
  //   electrician,
  //   electronics_store,
  //   embassy,
  //   fire_station,
  //   flowers_store,
  //   funeral_service,
  //   furniture_store,
  //   gas_station,
  //   government_office,
  //   grocery_store,
  //   gym,
  //   hairdressing_salon,
  //   hardware_store,
  //   home_goods_store,
  //   hospital,
  //   insurance_agency,
  //   jewelry_store,
  //   laundry,
  //   lawyer,
  //   library,
  //   liquor_store,
  //   locksmith,
  //   lodging,
  //   mosque,
  //   museum,
  //   night_club,
  //   park,
  //   parking,
  //   pet_store,
  //   pharmacy,
  //   plumber,
  //   police_station,
  //   post_office,
  //   primary_school,
  //   rail_station,
  //   real_estate_agency,
  //   restaurant,
  //   rv_park,
  //   school,
  //   secondary_school,
  //   shoe_store,
  //   shopping_center,
  //   spa,
  //   stadium,
  //   storage,
  //   store,
  //   subway_station,
  //   supermarket,
  //   synagogue,
  //   taxi_stand,
  //   temple,
  //   tourist_attraction,
  //   train_station,
  //   transit_station,
  //   travel_agency,
  //   university,
  //   veterinarian,
  //   zoo
  // ];

  // https://rapidapi.com/trueway/api/trueway-places/

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
  const handleSubmit = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      axios
        .request({
          method: "GET",
          url: "https://trueway-places.p.rapidapi.com/FindPlacesNearby",
          params: {
            type: typeState,
            // TODO: Add in location from state somehow. FIXME:
            // This works // params: { country: covidNewsState.country, day: covidNewsState.day },
            location: `${lat},${lng}`,
            // location: where.location,
            // location: "latitude,longitude",
            radius: radiusState.radius,
            language: languageState,
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

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setToGo({
  //     ...toGo,
  //     [name]: value,
  //   });
  // };
  // const handleInput2Change = (event) => {
  //   const { name, value } = event.target;
  //   setRadiusState({
  //     ...radiusState,
  //     [name]: value,
  //   });
  // };

  return (
    <>
      {/* {toGo.map((places) => (
                <option>{places}</option>
              ))} */}
      <div className="container">
        {/* <div className="row">
          <label>
            <h6>Radius</h6>
            <input
              type="text"
              name="Radius"
              value={radiusState.radius}
              onChange={handleInput2Change}
              className="radius"
              placeholder="radius"
            />
          </label>
        </div> */}
        {/* <h6>language</h6>
        <input
          value={toGo.language}
          name="language"
          onChange={handleInputChange}
          type="text"
          placeholder="en"
        /> */}
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

        <div className="container">
        <br/>
        <h1>Directory</h1>
        <br/>
        <button onClick={handleOpen}>Search</button>
          <div className="row">
            <div className="col-sm-12">
              <table className="table table-success table-striped">
                <thead>
                  <tr>
                    <th scope="col">Distance</th>
                    <th scope="col">Address</th>
                    <th scope="col">Place</th>
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
                          <td>{place.distance}</td>
                          <td>{place.address}</td>
                          <td>{place.name}</td>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>What Type Of Place?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="places">Type Of Places</label>
              <input
                type="text"
                className="form-control"
                value={typeState}
                id="places"
                name="type"
                onChange={(e) => {
                  setTypesState(e.target.value);
                }}
                placeholder="Leave blank to search all places..."
              />
            </div>
            <label htmlFor="places">Language</label>
            <input
              className="form-control"
              value={languageState}
              name="language"
              onChange={(e) => {
                setLangState(e.target.value);
              }}
              // onChange={handleInputChange}
              type="text"
              placeholder="en"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type="button" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Search
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WhereToGo;
