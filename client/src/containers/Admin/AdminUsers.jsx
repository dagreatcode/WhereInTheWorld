import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminUsers = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("/api/user").then((response) => {
      console.log(response.data);
      setUser(response.data);
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <table class="table table-success table-striped">
            <thead>
              <tr>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Date</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {user.length ? (
                user.map((aUser) => {
                  return (
                    <tr key={aUser._id}>
                      <td>{aUser.email}</td>
                      <td>{aUser.password}</td>
                      <td>{aUser.date}</td>
                      <td>
                          <button className="btn btn-secondary">Edit</button>
                      </td>
                      <td>
                          <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <h1>Not Found</h1>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
