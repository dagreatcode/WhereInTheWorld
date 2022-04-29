import React, { useState } from "react";
import axios from "axios";

function Covid() {
  const [covidNewsState, setCovidNewsState] = useState({
    continent: "",
    country: "",
    day: "",
    population: 0,
    cases: 0,
    deaths: 0,
  });

  const optionsss = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/history",
    params: { country: "usa", day: "2020-06-02" },
    headers: {
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
      "X-RapidAPI-Key": "d45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1",
    },
  };

  const optionss = {
    method: "GET",
    url: "https://coronavirus-smartable.p.rapidapi.com/news/v1/US/",
    headers: {
      "X-RapidAPI-Host": "coronavirus-smartable.p.rapidapi.com",
      "X-RapidAPI-Key": "d45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1",
    },
  };

  const options = {
    method: "GET",
    url: "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/northamerica",
    headers: {
      "X-RapidAPI-Host":
        "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
      "X-RapidAPI-Key": "d45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1",
    },
  };

  const handleSubmit = () => {
    axios
      .request(optionsss)
      .then(function (response) {
        const go = response.data.response[0];
        setCovidNewsState(go);
        console.log(go);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handle2Submit = () => {
    axios
      .request(optionss)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handle3Submit = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <div>Info: {covidNewsState.cases.active}</div>
      <button onClick={handleSubmit}>go</button>
      <button onClick={handle2Submit}>go</button>
      <button onClick={handle3Submit}>go</button>
    </div>
  );
}

export default Covid;
