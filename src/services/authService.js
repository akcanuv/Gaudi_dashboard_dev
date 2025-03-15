// authService.js
import axios from "axios";

const API_BASE_URL = `https://dev.api.dashboard.gaudi.engineer`; // Gotta replace this with your backend URL

export const authenticateWithBackend = async (idToken) => {
  try {    
    const response = await axios.post(`${API_BASE_URL}/v1/user/auth/?id_token=${idToken}`,{}, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error authenticating with backend:", error);
    throw error;
  }
};
