import React from "react";
// FIXME: Remember. This page is not in use
const SignUp = () => {
	// /api/signup Close OUT. Not In Use.

	return (
		<div>
			<div className="container">
				<div className="container col-xl-10 col-xxl-8 px-4 py-5">
					<div className="row align-items-center g-lg-5 py-5">
						<div className="col-lg-7 text-center text-lg-start">
							<h1 className="display-4 fw-bold lh-1 mb-3">Thank You</h1>
							<p className="col-lg-10 fs-4">
								For signing up, you will be able to use this site forever, for
								free. Early sign up is a was to help the developers with bug and
								updates. We value your opinion and hope to bring great customer
								service.
							</p>
						</div>
						<div className="col-md-10 mx-auto col-lg-5">
							<form className="p-4 p-md-5 border rounded-3 bg-light">
								<div className="form-floating mb-3">
									<input
										type="email"
										className="form-control"
										id="floatingInput"
										placeholder="name@example.com"
										data-nlok-ref-guid="45d30697-7fd3-457b-fb20-fd168951d258"
										control-id="ControlID-1"
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
									/>
									<div id="norton-idsafe-field-styling-divId"></div>
									<label htmlFor="floatingPassword">Password</label>
								</div>
								<div className="checkbox mb-3">
									<label>
										<input
											type="checkbox"
											value="remember-me"
											control-id="ControlID-3"
										/>{" "}
										Remember me
									</label>
								</div>
								<button
									className="w-100 btn btn-lg btn-primary"
									type="submit"
									control-id="ControlID-4"
								>
									Sign up
								</button>
								<hr className="my-4" />
								<small className="text-muted">
									By clicking Sign up, you agree to the terms of use.
								</small>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
