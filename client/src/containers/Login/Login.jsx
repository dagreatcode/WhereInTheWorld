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
    <div className='container'>
      <div className="mt-4">
        <h2>Login</h2>
      </div>
      <form onSubmit={handleSubmit} className='p-4 p-md-5 border rounded-3 bg-light'>
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
          <button className="w-10 btn btn-lg btn-primary" type="submit">
              Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
