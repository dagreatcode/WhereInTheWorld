import axios from "axios";

export const setAxiosDefault = (token) => {
	axios.defaults.headers["Authorization"] = token;
};
