import Cookies from "js-cookie";

export const isLoggedIn = () => {
	const authToken = Cookies.get("token");
	return !!authToken;
};

export const logout = () => {
	Cookies.remove("token");
};
