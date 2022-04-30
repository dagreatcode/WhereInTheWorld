import React, { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

function Covid() {

  const [covidNewsState, setCovidNewsState] = useState({
    continent: "",
    country: "usa",
    day: "2020-06-02",
    population: 0,
    cases: {},
    tests: {},
    time: "",
    deaths: {}
  });

  // const [covidState, setCovidState] = useState({
  //   location: {},
  //   news: [],
  //   updatedDateTime: ""
  // })

  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/history",
    params: { country: covidNewsState.country, day: covidNewsState.day},
    headers: {
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
      "X-RapidAPI-Key": "d45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1",
    },
  };

  // countries, history, statistics
  // const historyOrCountries = 'history';

  // const optionsss = {
  //   method: 'GET',
  //   url: 'https://covid-193.p.rapidapi.com/' + {historyOrCountries},
  //   params: {country: covidNewsState.country, day: covidNewsState.day},
  //   headers: {
  //     'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
  //     'X-RapidAPI-Key': 'd45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1'
  //   }
  // };

  // const optionss = {
  //   method: "GET",
  //   url: "https://coronavirus-smartable.p.rapidapi.com/news/v1/US/",
  //   headers: {
  //     "X-RapidAPI-Host": "coronavirus-smartable.p.rapidapi.com",
  //     "X-RapidAPI-Key": "d45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1",
  //   },
  // };

  // const options = {
  //   method: "GET",
  //   url: "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/northamerica",
  //   headers: {
  //     "X-RapidAPI-Host":
  //       "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
  //     "X-RapidAPI-Key": "d45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1",
  //   },
  // };

  const handleSubmit = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.response);
        setCovidNewsState(response.data.response[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handle2Submit = () => {
    // axios
    //   .request(optionss)
    //   .then(function (response) {
    //     console.log(response.data);
    //     setCovidState(response.data)
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  };

  const handle3Submit = () => {
    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <Form.Group className="mb-3">
            <Form.Label>Disabled input</Form.Label>
            <Form.Control placeholder="Disabled input" disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Choose A State</Form.Label>
            <Form.Select disabled>
              <option></option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Can't check this" disabled />
          </Form.Group>
        </div>
        <h1>Hello: {covidNewsState.population} - {covidNewsState.cases.new} - {covidNewsState.time}
         - {covidNewsState.tests.total}</h1>
        <button onClick={handleSubmit}>go</button>
        <button onClick={handle2Submit}>go</button>
        <button onClick={handle3Submit}>go</button>
      </div>
    </>
  );
}

export default Covid;
