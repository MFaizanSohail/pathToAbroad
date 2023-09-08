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
	  return null; 
	}
  
	try {
	  const decodedToken = jwtDecode(authToken);
	  console.log(decodedToken);
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
