import React, { useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import WTGInput from "./WTGInput";
import Container from "react-bootstrap/Container";
import "./WTG.css";

const WhereToGo = () => {
  const [radiusState] = useState({
    radius: 10000,
  });
  const [languageState, setLangState] = useState("EN");
  const [typeState, setTypesState] = useState("");
  // const [findPlaceByText, setPlaceByText] = useState({text: "Children's Creativity Museum"});
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
  });

  const language2 = [
    "AB",
    "AA",
    "AF",
    "SQ",
    "AM",
    "AR",
    "HY",
    "AS",
    "AY",
    "AZ",
    "BA",
    "EU",
    "BN",
    "DZ",
    "BH",
    "BI",
    "BR",
    "BG",
    "MY",
    "BE",
    "KM",
    "CA",
    "ZH",
    "CO",
    "HR",
    "CS",
    "DA",
    "NL",
    "EN",
    "EO",
    "ET",
    "FO",
    "FJ",
    "FI",
    "FR",
    "FY",
    "GD",
    "GL",
    "KA",
    "DE",
    "EL",
    "KL",
    "GN",
    "GU",
    "HA",
    "IW",
    "HI",
    "HU",
    "IS",
    "IN",
    "IA",
    "IE",
    "IK",
    "GA",
    "IT",
    "JA",
    "JW",
    "KN",
    "KS",
    "KK",
    "RW",
    "KY",
    "RN",
    "KO",
    "KU",
    "LO",
    "LA",
    "LV",
    "LN",
    "LT",
    "MK",
    "MG",
    "MS",
    "ML",
    "MT",
    "MI",
    "MR",
    "MO",
    "MN",
    "NA",
    "NE",
    "NO",
    "OC",
    "OR",
    "OM",
    "PS",
    "FA",
    "PL",
    "PT",
    "PA",
    "QU",
    "RM",
    "RO",
    "RU",
    "SM",
    "SG",
    "SA",
    "SR",
    "SH",
    "ST",
    "TN",
    "SN",
    "SD",
    "SI",
    "SS",
    "SK",
    "SL",
    "SO",
    "ES",
    "SU",
    "SW",
    "SV",
    "TL",
    "TG",
    "TA",
    "TT",
    "TE",
    "TH",
    "BO",
    "TI",
    "TO",
    "TS",
    "TR",
    "TK",
    "TW",
    "UK",
    "UR",
    "UZ",
    "VI",
    "VO",
    "CY",
    "WO",
    "XH",
    "JI",
    "YO",
  ];

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

  // https://rapidapi.com/trueway/api/trueway-places/

  // const handleSubmit2 = (e) => {

  //   const options = {
  //     method: "GET",
  //     url: "https://trueway-places.p.rapidapi.com/FindPlaceByText",
  //     params: { text: findPlaceByText.text, language: "en" },
  //     headers: {
  //       "X-RapidAPI-Host": "trueway-places.p.rapidapi.com",
  //       "X-RapidAPI-Key": "",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
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
            location: `${lat},${lng}`,
            radius: radiusState.radius,
            language: languageState,
          },
          headers: {
            "X-RapidAPI-Host": "trueway-places.p.rapidapi.com",
            "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          },
        })
        .then(function (response) {
          setToGo(response.data.results);
          handleClose();
        })
        .catch(function (error) {});
    });
  };

  return (
    <>
      <Container>
        <br />
        <div className="Jumbotron text-center">
          <h1 className="display-5">Near By Places Directory</h1>
        </div>
        <br />
        <Button onClick={handleOpen}>Search</Button>
        <div className="row">
          <div className="col-sm-12 table-responsive">
            <table className="table">
              <thead>
                <tr className="table-primary">
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
                        <td>
                          <address>{place.address}</address>
                        </td>
                        <td>{place.name}</td>
                        <td>
                          <a href={"tel:" + place.phone_number}>
                            {place.phone_number}
                          </a>
                        </td>
                        <td>{place.types}</td>
                        <td>
                          <a href={place.website}>{place.website}</a>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <th>
                      <h6>
                        Not Found Until you{" "}
                        <strong>
                          <u>turn on your location</u>
                        </strong>
                        .<p>Where To Go?</p>
                        <p>
                          If This is a private Browser, the GEO Location for
                          this page will not work.
                        </p>
                        A Geolocation request can only be fulfilled in a secure
                        context.<p></p>
                      </h6>
                    </th>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>What Type Of Place?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
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
            &nbsp;&nbsp; {typeState.replace("_", " ")}
            <br />
            {/* <WTGInput
              label="Language"
              id="Language"
              value={languageState}
              name="language"
              placeholder="en"
              handleChange={(e) => {
                setLangState(e.target.value);
              }}
            /> */}
            <label htmlFor="places">Select a language</label>
            <br />
            <select
              name="type"
              className="custom-select"
              id="places"
              value={languageState}
              onChange={(e) => {
                setLangState(e.target.value);
              }}
            >
              <option value="">Select...</option>
              {language2.map((lang) => (
                <option key={lang}>{lang}</option>
              ))}
            </select>
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

// WhereToGo.propType = {}

export default WhereToGo;
