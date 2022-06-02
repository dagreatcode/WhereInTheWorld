import React, { useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import WTGInput from "./WTGInput";
import Container from "react-bootstrap/Container";
import "./WTG.css";
// import { Link } from 'react-router-dom';
// import WTGSelect from "./WTGSelect";

const WhereToGo = () => {
  const [radiusState] = useState({
    radius: 10000,
  });
  const [languageState, setLangState] = useState("en");
  const [typeState, setTypesState] = useState("");
  // const [phoneState, setPhoneState] = useState("");
  const [show, setsShow] = useState(false);
  const handleClose = () => {
    setsShow(!show);
  };
  const handleOpen = () => {
    setsShow(true);
  };

  const [toGo, setToGo] = useState({
    address: "",
    distance: 0,
    id: "",
    location: { lat: 0, lng: 0 },
    name: "",
    phone_number: 0,
    types: [],
    website: "",
    // radius: 800,
    // language: "en",
  });

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
  // const row = toGo.map(({ location }) => location );
  // const data = {
  //   columns: [
  //     {
  //       label: "Distance",
  //       field: "distance",
  //       sort: "asc",
  //       width: 150,
  //     },
  //     {
  //       label: "Address",
  //       field: "address",
  //       sort: "asc",
  //       width: 270,
  //     },
  //     {
  //       label: "Place",
  //       field: "place",
  //       sort: "asc",
  //       width: 200,
  //     },
  //     {
  //       label: "Phone Number",
  //       field: "phoneNumber",
  //       sort: "asc",
  //       width: 100,
  //     },
  //     {
  //       label: "Types",
  //       field: "types",
  //       sort: "asc",
  //       width: 150,
  //     },
  //     {
  //       label: "Website",
  //       field: "website",
  //       sort: "asc",
  //       width: 100,
  //     },
  //   ],
  //   rows: [
  //     {
  //       distance: `${toGo.distance}`,
  //       address: `${toGo.address}`,
  //       place: `${toGo.place}`,
  //       phoneNumber: `${toGo.phone_number}`,
  //       types: `${toGo.types}`,
  //       website: `${toGo.website}`,
  //     },
  //   ],
  // };
  // https://rapidapi.com/trueway/api/trueway-places/

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
          // console.log(response.data);
          setToGo(response.data.results);
          handleClose();
        })
        .catch(function (error) {
          // console.error(error);
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
      <Container>
        <br />
        <h1>Near By Places Directory</h1>
        <br />
        <button onClick={handleOpen}>Search</button>
        <div className="row">
          <div className="col-sm-12 table-responsive">
            <table className="table">
              <thead>
                <tr class="table-primary">
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
                      <tr key={place.id}>
                        <td>{place.distance}</td>
                        {/* <td>{place.address}</td> */}
                        <td>
                          <address>{place.address}</address>
                        </td>
                        <td>{place.name}</td>
                        {/* <td type="tel">{place.phone_number}</td> */}
                        <td>
                          <a href={"tel:" + place.phone_number}>
                            {place.phone_number}
                          </a>
                        </td>
                        <td>{place.types}</td>
                        {/* <td>{place.website}</td> */}
                        <td>
                          <a href={place.website}>{place.website}</a>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <th>
                      <h6>Not Found Until you search something....</h6>
                      {/* airport, amusement_park, aquarium, art_gallery, atm,
                      bakery, bank, bar, beauty_salon, bicycle_store,
                      book_store, bowling, bus_station, cafe, campground,
                      car_dealer, car_rental, car_repair, car_wash, casino,
                      cemetery, church, cinema, city_hall, clothing_store,
                      convenience_store, courthouse, dentist, department_store,
                      doctor, electrician, electronics_store, embassy,
                      fire_station, flowers_store, funeral_service,
                      furniture_store, gas_station, government_office,
                      grocery_store, gym, hairdressing_salon, hardware_store,
                      home_goods_store, hospital, insurance_agency,
                      jewelry_store, laundry, lawyer, library, liquor_store,
                      locksmith, lodging, mosque, museum, night_club, park,
                      parking, pet_store, pharmacy, plumber, police_station,
                      post_office, primary_school, rail_station,
                      real_estate_agency, restaurant, rv_park, school,
                      secondary_school, shoe_store, shopping_center, spa,
                      stadium, storage, store, subway_station, supermarket,
                      synagogue, taxi_stand, temple, tourist_attraction,
                      train_station, transit_station, travel_agency, university,
                      veterinarian, zoo */}
                    </th>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        {/* <MDBDataTable
          scrollY
          maxHeight="200px"
          striped
          bordered
          small
          data={data}
        /> */}
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>What Type Of Place?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            {/* <div className="form-group"> */}
            {/* <WTGInput
              label="Type Of Places"
              id="places"
              value={typeState}
              name="type"
              placeholder="Leave blank to search all places..."
              handleChange={(e) => {
                setTypesState(e.target.value.toLowerCase().replace(" ", "_"));
              }}
            /> */}
            {/* <WTGSelect
              name="type"
              id="places"
              value={typeState}
              handleChange={(e) => {
                setTypesState(e.target.value);
              }}
            /> */}
            <label htmlFor="places">Type Of Place</label>
            <br />
            <select
              name="type"
              className="custom-select"
              id="places"
              value={typeState}
              onChange={(e) => {
                setTypesState(e.target.value.toLowerCase().replace(" ", "_"));
              }}
            >
              <option value="">Select...</option>
              {typeOfPlaces.map((place) => (
                <option key={place}>{place.replace("_", " ")}</option>
              ))}
            </select>
            <br />
            {/* <label htmlFor="places">Type Of Places</label>
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
              /> */}
            {/* </div> */}
            <WTGInput
              label="Language"
              id="Language"
              value={languageState}
              name="language"
              placeholder="en"
              handleChange={(e) => {
                setLangState(e.target.value);
              }}
            />
            {/* <label htmlFor="places">Language</label>
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
            /> */}
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
