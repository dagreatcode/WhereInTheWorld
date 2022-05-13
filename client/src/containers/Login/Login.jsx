import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { email, password } = e.target;
    axios
      .post("/api/user", { email, password })
      .then((response) => {
        console.log(response.data);
        navigate('/')
        // history.push("/");
        // window.location = "/home";
        // this.props.history.push("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="mt-4">
        <h2>Login</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="p-4 p-md-5 border rounded-3 bg-light"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <input
                id="email"
                className="form-control"
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-sm-12">
              <input
                id="password"
                className="form-control"
                type="password"
                placeholder="Password"
                name={password}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            className="w-10 btn btn-lg btn-primary"
            type="submit"
            //onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
