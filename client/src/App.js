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
import AdminUsers from "./containers/Admin/AdminUsers";
import AdminNewUser from "./containers/Admin/AdminNewUser";

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
          <Route exact path="/AdminUsers" element={<AdminUsers />} />
          <Route exact path="/AdminNewUser" element={<AdminNewUser />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Gas" element={<Gas />} />
          <Route exact path="/Covid" element={<Covid />} />
          <Route exact path="/WhereToGo" element={<WhereToGo />} />
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route render={() => <h1>Page not found</h1>} /> */}
        </Routes>
      </Router>
  
  );
}

export default App;
