import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import HelloBootstrap from "./components/HelloBootstrap";
import NavBar from "./components/NavBar/NavBar";
import Alert from "./components/Alert";

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
        <Alert type="danger">Toast</Alert>
      </div>
    </>
  );
}

export default App;
