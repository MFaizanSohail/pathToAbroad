import Cookies from "js-cookie";
import jwtDecode from 'jwt-decode';

export const isLoggedIn = () => {
	const authToken = Cookies.get("token");
	return !!authToken;
};

export const userToken = () => {
	const authToken = Cookies.get("token");
  
	if (!authToken) {
	  console.error("No authToken found.");
	  return null; // Handle the absence of a token as needed
	}
  
	try {
	  const decodedToken = jwtDecode(authToken);
	  const userId = decodedToken.id;

	  return userId;
	} catch (error) {
	  console.error("Token decoding error:", error);
	  return null; 
	}
  };

export const logout = () => {
	Cookies.remove("token");
};
