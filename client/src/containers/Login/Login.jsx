import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/user", { email, password })
      .then((response) => {
        console.log(response.data);
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
                className="form-control"
                type="text"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-sm-12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
            </div>
          </div>
          <button className="w-10 btn btn-lg btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
