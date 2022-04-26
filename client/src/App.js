import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import HelloBootstrap from "./components/HelloBootstrap";
import NavBar from "./components/NavBar/NavBar";
import Alert from "./components/Alert";
import AllUsers from "./components/AllUsers";
import Counter from "./components/Counter";
// import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    console.log("Make an API call.");
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

const optionsss = {
  method: 'GET',
  url: 'https://covid-193.p.rapidapi.com/history',
  params: {country: 'usa', day: '2020-06-02'},
  headers: {
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
    'X-RapidAPI-Key': 'd45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1'
  }
};

axios.request(optionsss).then(function (response) {
	console.log(response.data.response);
}).catch(function (error) {
	console.error(error);
});

  // const options = {
  //   method: "GET",
  //   url: "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/northamerica",
  //   headers: {
  //     "X-RapidAPI-Host":
  //       "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
  //     "X-RapidAPI-Key": "d45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1",
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  // const optionss = {
  //   method: "GET",
  //   url: "https://coronavirus-smartable.p.rapidapi.com/news/v1/US/",
  //   headers: {
  //     "X-RapidAPI-Host": "coronavirus-smartable.p.rapidapi.com",
  //     "X-RapidAPI-Key": "d45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1",
  //   },
  // };

  // axios
  //   .request(optionss)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  // const options = {
  //   method: 'GET',
  //   url: 'https://gas-price.p.rapidapi.com/stateUsaPrice',
  //   params: {state: 'GA'},
  //   headers: {
  //     'X-RapidAPI-Host': 'gas-price.p.rapidapi.com',
  //     'X-RapidAPI-Key': 'd45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1'
  //   }
  // };

  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

  return (
    <>
      <NavBar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <HelloBootstrap />
          <p>DaGreat Code LLC.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <AllUsers />
        <Counter />
        <Alert type="danger">Toast</Alert>
      </div>
    </>
  );
}

export default App;
