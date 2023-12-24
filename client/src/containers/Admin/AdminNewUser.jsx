import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminNewUser = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [typeOfUser, setTypeOfUser] = useState("");
	const navigate = useNavigate();
	// useEffect(() => {
	//   axios
	//     .get("/api/user")
	//     .then((response) => {
	//       // setTypeOfUser(response.data);
	//     })
	//     .catch((err) => {
	//       console.log(err);
	//     });
	// }, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("/api/signUp", { email, password, typeOfUser })
			.then((response) => {
				navigate("/AdminUsers");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<div className="container">
				<div className="container col-xl-10 col-xxl-8 px-4 py-5">
					<div className="row align-items-center g-lg-5 py-5">
						<div className="col-lg-7 text-center text-lg-start">
							<h1 className="display-4 fw-bold lh-1 mb-3">Admin Land</h1>
							<p className="col-lg-10 fs-4">
								Hello Administrator. Who will we add today?
							</p>
						</div>
						<div className="col-md-10 mx-auto col-lg-5">
							<form
								onSubmit={handleSubmit}
								className="p-4 p-md-5 border rounded-3 bg-light"
							>
								<div className="form-floating mb-3">
									<input
										type="email"
										className="form-control"
										id="floatingInput"
										placeholder="name@example.com"
										data-nlok-ref-guid="45d30697-7fd3-457b-fb20-fd168951d258"
										control-id="ControlID-1"
										name="email"
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
									<div id="norton-idsafe-field-styling-divId"></div>
									<label htmlFor="floatingInput">Email address</label>
								</div>
								<div className="form-floating mb-3">
									<input
										type="password"
										className="form-control"
										id="floatingPassword"
										placeholder="Password"
										data-nlok-ref-guid="133f212d-f672-4c6f-e332-4bc651dd15a2"
										control-id="ControlID-2"
										name="password"
										value={password}
										onChange={(e) => {
											setPassword(e.target.value);
										}}
									/>
									<div id="norton-idsafe-field-styling-divId"></div>
									<label htmlFor="floatingPassword">Password</label>
								</div>
								<div className="custom-select mb-3">
									<select
										selected
										name="email"
										value={typeOfUser}
										onChange={(e) => {
											setTypeOfUser(e.target.value);
										}}
									>
										<option value="1">User</option>
										<option value="2">Administrator</option>
										<option value="3">Coder</option>
									</select>
								</div>
								<button
									className="w-100 btn btn-lg btn-primary"
									type="submit"
									control-id="ControlID-4"
								>
									Add New User
								</button>
								<hr className="my-4" />
								<small className="text-muted">
									Good to see you behind all of this rubbish....
								</small>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminNewUser;
