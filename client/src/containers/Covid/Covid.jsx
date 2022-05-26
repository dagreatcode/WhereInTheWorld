import React, { useState } from "react";
import axios from "axios";
// import { Form } from "react-bootstrap";

function Covid(props) {
  const [covidNewsState, setCovidNewsState] = useState({
    continent: "",
    country: "usa",
    day: "2022-03-04",
    population: 0,
    cases: {},
    tests: {},
    time: "",
    deaths: {},
  });
  const [nextState, setNextState] = useState({
    country2: "southamerica",
  });

  // FIXME: Add more then just 1 news, add all with map()
  const [covidState, setCovidState] = useState({
    title: "",
    excerpt: "",
    originalUrl: "",

    // updatedDateTime: "",
  });

  const [covidFullReport, setReport] = useState({
    ActiveCases: 0,
    Case_Fatality_Rate: 0.0,
    Continent: "",
    Country: "",
    Deaths_1M_pop: 0,
    Infection_Risk: 0.0,
    NewCases: 0,
    NewDeaths: 0,
    NewRecovered: 0,
    Population: "",
    Recovery_Proporation: 0,
    Serious_Critical: 0,
    Test_Percentage: 0,
    Tests_1M_Pop: 0,
    ThreeLetterSymbol: "",
    TotCases_1M_Pop: 0,
    TotalCases: 0,
    TotalDeaths: 0,
    TotalRecovered: "",
    TotalTests: "",
    TwoLetterSymbol: "",
    id: "",
    one_Caseevery_X_ppl: 0,
    one_Deathevery_X_ppl: 0,
    one_Testevery_X_ppl: 0,
    rank: 0,
  });

  const axios = require("axios");
// TODO: https://rapidapi.com/vaccovidlive-vaccovidlive-default/api/vaccovid-coronavirus-vaccine-and-treatment-tracker/

// https://rapidapi.com/KishCom/api/covid-19-coronavirus-statistics/

// const options = {
//   method: 'GET',
//   url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats',
//   params: {country: 'Canada'},
//   headers: {
//     'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
//     'X-RapidAPI-Key': 'd45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/history",
    params: { country: covidNewsState.country, day: covidNewsState.day },//FIXME: Seems like its fixed from using ${}from state //TODO: make sure this works.
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

  const optionss = {
    method: "GET",
    url: `https://coronavirus-smartable.p.rapidapi.com/news/v1/US/`, // TODO: ass from user
    headers: {
      "X-RapidAPI-Host": "coronavirus-smartable.p.rapidapi.com",
      "X-RapidAPI-Key": "d45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1",
    },
  };

  const option = {
    method: "GET",
    url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/${nextState.country2}`, // FIXME: not taking in information from state.
    headers: {
      "X-RapidAPI-Host":
        "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
      "X-RapidAPI-Key": "d45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1",
    },
  };

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCovidNewsState({
      ...covidNewsState,
      [name]: value,
    });
  };
  const handleInput2Change = (event) => {
    const { name, value } = event.target;
    setNextState({
      ...nextState,
      [name]: value,
    });
  };

  // const handleInput2Change = (event) => {
  //   const { name, value } = event.target;
  //   setCovidNewsState({
  //     ...covidNewsState,
  //     [name]: value,
  //   });
  // };

  // const handleInput3Change = (event) => {
  //   const { name, value } = event.target;
  //   setCovidNewsState({
  //     ...covidNewsState,
  //     [name]: value,
  //   });
  // };

  // const handleFormChange = (e) => {
  //   e.preventDefault();
  //   console.log("ok");
  // }

  const handle2Submit = () => {
    axios
      .request(optionss)
      .then(function (response) {
        console.log(response.data);
        setCovidState(response.data.news[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handle3Submit = () => {
    axios
      .request(option)
      .then(function (response) {
        console.log(response.data[0]);
        setReport(response.data[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // const arrayOfCountry = ["", "southamerica", "northamerica", "africa"];

  return (
    <>
      <div className="container">
        <div className="row">
          <label>
            <input
              type="text"
              name="day"
              value={covidNewsState.day}
              onChange={handleInputChange}
              className="day"
              placeholder="2022-04-30 Must Have"
            />
          </label>
        </div>
        <h6>Place a Continent here</h6>
        <div className="row">
          <label>
            <input
              type="text"
              name="continent"
              value={covidNewsState.continent}
              onChange={handleInputChange}
              className="continent"
              placeholder="continent"
            />
          </label>
        </div>
        <h6>Place a Country here</h6>
        <div className="row">
          <label>
            <input
              type="text"
              name="country"
              value={covidNewsState.country}
              onChange={handleInputChange}
              className="country"
              placeholder="USA Must Have"
            />
          </label>
        </div>
        <button onClick={handleSubmit}>go</button>
        <h1>
          Day:&nbsp; {covidNewsState.day}
          <br />
          Time:&nbsp; {covidNewsState.time}
          <br />
          Continent:&nbsp; {covidNewsState.continent} <br />
          Country:&nbsp; {covidNewsState.country} <br />
          Population:&nbsp; {covidNewsState.population} <br />
          Cases
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;active: {covidNewsState.cases.active}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;new: {covidNewsState.cases.new}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;critical: {covidNewsState.cases.critical}
          <br />
          Deaths
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;new: {covidNewsState.deaths.new}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;total: {covidNewsState.deaths.total}
          <br />
          Tests
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;total: {covidNewsState.tests.total} <br />
        </h1>
        <br />

        <button onClick={handle2Submit}>go</button>
        <h1>
          Title: {covidState.title} <br />
          <br />
          News: {covidState.excerpt} <br />
          <br />
          Link: {covidState.originalUrl} <br />
          <br />
          {/* Time: {covidState.updatedDateTime}
          <br /> */}
        </h1>
        <div className="container">
        <div className="row">
          <label>
            <input
              type="text"
              name="country2"
              value={nextState.country2}
              onChange={handleInput2Change}
              className="country2"
              placeholder="northamerica"
            />
          </label>
        </div>
        </div>
        {/* <div className="form-group">
          <select
            className="custom-select mb-3"
            value={nextState.country2}
            id="country2"
            onChange={(e) => {
              setNextState(e.target.value);
            }}
          >
            <option value="">All</option>
            {arrayOfCountry.map((country) => (
              <option>{country}</option>
            ))}
          </select>
        </div> */}
        <button onClick={handle3Submit}>go</button>
        <h1>
          <br />
          ActiveCases: {covidFullReport.ActiveCases}
          <br />
          Case_Fatality_Rate:{covidFullReport.Case_Fatality_Rate}
          <br />
          Continent:{covidFullReport.Continent}
          <br />
          Country: {covidFullReport.Country}
          <br />
          Deaths_1M_pop: {covidFullReport.Deaths_1M_pop}
          <br />
          Infection_Risk: {covidFullReport.Infection_Risk}
          <br />
          NewCases: {covidFullReport.NewCases}
          <br />
          NewDeaths: {covidFullReport.NewDeaths}
          <br />
          NewRecovered: {covidFullReport.NewRecovered}
          <br />
          Population: {covidFullReport.Population}
          <br />
          Recovery_Proporation: {covidFullReport.Recovery_Proporation}
          <br />
          Serious_Critical: {covidFullReport.Serious_Critical}
          <br />
          Test_Percentage: {covidFullReport.Test_Percentage}
          <br />
          Tests_1M_Pop: {covidFullReport.Tests_1M_Pop}
          <br />
          ThreeLetterSymbol: {covidFullReport.ThreeLetterSymbol}
          <br />
          TotCases_1M_Pop: {covidFullReport.TotCases_1M_Pop}
          <br />
          TotalCases: {covidFullReport.TotalCases}
          <br />
          TotalDeaths: {covidFullReport.TotalDeaths}
          <br />
          TotalRecovered: {covidFullReport.TotalRecovered}
          <br />
          TotalTests: {covidFullReport.TotalTests}
          <br />
          TwoLetterSymbol: {covidFullReport.TwoLetterSymbol}
          <br />
          id: {covidFullReport.id}
          <br />
          one_Caseevery_X_ppl: {covidFullReport.one_Caseevery_X_ppl}
          <br />
          one_Deathevery_X_ppl: {covidFullReport.one_Deathevery_X_ppl}
          <br />
          one_Testevery_X_ppl: {covidFullReport.one_Testevery_X_ppl}
          <br />
          rank: {covidFullReport.rank}
          <br />
        </h1>
      </div>
    </>
  );
}

export default Covid;
// handleInputChange = event => {
//   // Getting the value and name of the input which triggered the change
//   const { name, value } = event.target;

//   // Updating the input's state
//   this.setState({
//     [name]: value
//   });
// };
