import React, { Component } from 'react';

class Covid extends Component {
    render() {
        return (
            <div>
                <h1>Pull In All Info</h1>
            </div>
        );
    }
}

export default Covid;

// const optionsss = {
    //   method: 'GET',
    //   url: 'https://covid-193.p.rapidapi.com/history',
    //   params: {country: 'usa', day: '2020-06-02'},
    //   headers: {
    //     'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
    //     'X-RapidAPI-Key': 'd45bb63eb5mshebc4e0e524334b5p10227ejsn3cb49f17bfa1'
    //   }
    // };
  
    // axios.request(optionsss).then(function (response) {
    //   const go = response.data.response;
    // 	console.log(go);
    // }).catch(function (error) {
    // 	console.error(error);
    // });
  
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