import React, { useContext, useEffect, useState } from "react";
import AlertContext from "../../utils/ContextAPI/AlertContext";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminUsers = () => {
	const [user, setUser] = useState([]);
	const { setAlert } = useContext(AlertContext);

	// FIXME: setAlert may not work in the empty array.
	useEffect(() => {
		axios
			.get("/api/user/admin")
			.then((response) => {
				console.log(response.data);
				setUser(response.data);
			})
			.catch((err) => {
				setAlert({ message: "Failed to retrieve users", type: "danger" });
			});
	}, [setAlert]);
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12 text-right">
					<Link to="/AdminNewUser" className="btn btn-primary">
						New User
					</Link>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-12">
					<table className="table table-success table-striped">
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
								<tr>
									<td>Not Found Unless Your Admin</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default AdminUsers;
