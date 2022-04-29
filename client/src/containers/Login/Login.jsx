import React, { useState } from "react";

const Login = () => {

    const [user, setUser] = useState({
        username: "Vincent",
        password: "password"
    });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="mt-4">
        <h2>SignIn</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-12-sm">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                value={user.username}
                onChange={(e) => {setUser({...user,username: e.target.value})}}
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-12-sm">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={(e) => {setUser({...user,password: e.target.value})}}
              />
            </div>
          </div>
          <button className="btn btn-success" type="submit">
              Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
