import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Gas from "./containers/Gas/Gas";
import Covid from "./containers/Covid/Covid";
import WhereToGo from "./containers/WhereToGo/WhereToGo";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./containers/NotFound/NotFound";

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

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/Gas" element={<Gas/>} />
        <Route exact path="/Covid" element={<Covid/>} />
        <Route exact path="/WhereToGo" element={<WhereToGo/>} />
        <Route exact component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
