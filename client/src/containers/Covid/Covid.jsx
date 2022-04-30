import React, { useState } from "react";
import axios from "axios";
// import { Form } from "react-bootstrap";

function Covid(props) {
  const [covidNewsState, setCovidNewsState] = useState({
    continent: "",
    country: "all",
    day: "2020-06-02",
    population: 0,
    cases: {},
    tests: {},
    time: "",
    deaths: {},
    words: "",
  });

  // const [covidState, setCovidState] = useState({
  //   location: {},
  //   news: [],
  //   updatedDateTime: ""
  // })

  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/history",
    params: { country: covidNewsState.country, day: covidNewsState.day },
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

  const handleInputChange = (event) => {
    setCovidNewsState({
      ...covidNewsState,
      words: event.target.value,
    });
  };

  // const handleFormChange = (e) => {
  //   e.preventDefault();
  //   console.log("ok");
  // }

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
          <label>
            <input
              type="text"
              name="words"
              value={covidNewsState.words}
              onChange={handleInputChange}
              className="words"
            />
          </label>
        </div>
        <button onClick={handleSubmit}>go</button>
        <h1>
          continent:{covidNewsState.cases.new} <br/>
          country: {covidNewsState.cases.new} <br/>
          population: {covidNewsState.population} <br/>
          cases: {covidNewsState.cases.new} <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;1M_pop: , active: {covidNewsState.cases.new}, critical: {covidNewsState.cases.new}, n… <br/>
          deaths: {covidNewsState.cases.new} <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;1M_pop: , new: {covidNewsState.deaths.new}, total: {covidNewsState.cases.new}<br/>
          tests: {covidNewsState.cases.new}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;1M_pop: , total: {covidNewsState.tests.total} <br/>
          day: {covidNewsState.cases.new}<br/>
          time: {covidNewsState.time}<br/>
          Hello: {" "}<br/>
        </h1>
        <button onClick={handle2Submit}>go</button>
        <button onClick={handle3Submit}>go</button>
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
