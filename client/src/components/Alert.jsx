// rsf

import React, { useEffect, useContext } from "react";
import AlertContext from "../utils/ContextAPI/AlertContext";

const Alert = () => {
	const { message, type, setAlert } = useContext(AlertContext);

	useEffect(() => {
		if (message.length) {
			setTimeout(() => {
				setAlert({ message: "", type: "" });
			}, 3000);
		}
	}, [message, type, setAlert]);

	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					{message && (
						<div className={`alert alert-${type || "primary"}`} role="alert">
							{message}
							<span
								style={{ float: "right" }}
								onClick={() => {
									setAlert({ message: "", type: "" });
								}}
							>
								x
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Alert;
