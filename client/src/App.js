import React, { useEffect, useState } from "react";
import AlertContext from "./utils/ContextAPI/AlertContext";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import "./App.css";
import axios from "axios";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Gas from "./containers/Gas/Gas";
import Covid from "./containers/Covid/Covid";
import WhereToGo from "./containers/WhereToGo/WhereToGo";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./containers/NotFound/NotFound";
import AdminUsers from "./containers/Admin/AdminUsers";
import AdminNewUser from "./containers/Admin/AdminNewUser";
import AuthContext from "./utils/ContextAPI/AuthContext";
import { setAxiosDefault } from "./utils/axiosDefault/axiosDefault";
import Alert from "./components/Alert";

function App() {
	const [jwt, setJwt] = useState("");

	const [isLoggedIn, setIsLoggedIn] = useState(null);

	const logOut = () => {
		setIsLoggedIn(false);
	};

	// Make Sure This Works. Children...
	const Protected = ({ isLoggedIn, children }) => {
		if (!isLoggedIn) {
			return <Navigate to="/login" replace />;
		}

		return children;
	};

	const [alert, setAlert] = useState({
		message: "Welcome",
		type: "success",
	});

	useEffect(() => {
		const localJwt = localStorage.getItem("jwt");
		if (localJwt) {
			setJwt(localJwt);
		}
	}, []);

	useEffect(() => {
		if (jwt) {
			setAxiosDefault(jwt);
			setIsLoggedIn(true);
			localStorage.setItem("jwt", jwt);
		}
	}, [jwt]);

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
		<Router>
			<AuthContext.Provider value={{ jwt, setJwt }}>
				<AlertContext.Provider value={{ ...alert, setAlert: setAlert }}>
					<NavBar />
					<Alert />
					{isLoggedIn ? (
						<button onClick={logOut}>Logout</button>
					) : (
						<button>Please Login</button>
					)}
					<Routes>
						<Route exact path="/AdminUsers" element={<AdminUsers />} />
						<Route exact path="/AdminNewUser" element={<AdminNewUser />} />
						<Route exact path="/Login" element={<Login />} />
						<Route
							path="/Gas"
							element={
								<Protected isLoggedIn={isLoggedIn}>
									<Gas />
								</Protected>
							}
						/>
						<Route
							path="/Covid"
							element={
								<Protected isLoggedIn={isLoggedIn}>
									<Covid />
								</Protected>
							}
						/>
						<Route
							path="/WhereToGo"
							element={
								<Protected isLoggedIn={isLoggedIn}>
									<WhereToGo />
								</Protected>
							}
						/>
						<Route exact path="/" element={<Home />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</AlertContext.Provider>
			</AuthContext.Provider>
		</Router>
	);
}

export default App;
